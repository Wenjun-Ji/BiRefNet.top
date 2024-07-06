import { Ratelimit } from "@upstash/ratelimit";
import type { NextApiRequest, NextApiResponse } from "next";
import requestIp from "request-ip";
import redis from "../../utils/redis";
export const maxDuration = 300;
type Data = string;
interface ExtendedNextApiRequest extends NextApiRequest {
  body: {
    imageUrl: string;
  };
}

// Create a new ratelimiter, that allows 3 requests per day
const ratelimit = redis
  ? new Ratelimit({
      redis: redis,
      limiter: Ratelimit.fixedWindow(3, "1440 m"),
      analytics: true,
    })
  : undefined;

export default async function handler(
  req: ExtendedNextApiRequest,
  res: NextApiResponse<Data>
) {
  // Rate Limiter Code
  if (ratelimit) {
    const identifier = requestIp.getClientIp(req);
    const result = await ratelimit.limit(identifier!);
    res.setHeader("X-RateLimit-Limit", result.limit.toString());
    res.setHeader("X-RateLimit-Remaining", result.remaining.toString());

    if (!result.success) {
      res
        .status(429)
        .json("Too many uploads in 1 day. Please try again after 24 hours.");
      return;
    }
  }

  const imageUrl = req.body.imageUrl;
  const REPLICATE_API_TOKEN = process.env.REPLICATE_API_KEY;
  const deploymentUrl = "https://api.replicate.com/v1/deployments/men1scus/birefnet/predictions";

  // POST request to start the image restoration process
  let startResponse = await fetch(deploymentUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${REPLICATE_API_TOKEN}`,
    },
    body: JSON.stringify({
      input: { image: imageUrl },
    }),
  });

  let jsonStartResponse = await startResponse.json();
  let predictionId = jsonStartResponse.id;
  let endpointUrl = `https://api.replicate.com/v1/predictions/${predictionId}`;

  // GET request to get the status of the image restoration process & return the result when it's ready
  let restoredImage: string | null = null;
  const startTime = Date.now();
  const maxDuration = 300000; // 最大时间 300 秒

  while (!restoredImage) {
    if (Date.now() - startTime > maxDuration) {
      console.error("Polling timed out.");
      res.status(500).json("Image restoration process timed out.");
      return;
    }

    // Loop in 1s intervals until the image is ready or timeout occurs
    console.log("polling for result...");
    let finalResponse = await fetch(endpointUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${REPLICATE_API_TOKEN}`,
      },
    });
    let jsonFinalResponse = await finalResponse.json();

    if (jsonFinalResponse.status === "succeeded") {
      restoredImage = jsonFinalResponse.output;
    } else if (jsonFinalResponse.status === "failed") {
      break;
    } else {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }

  res
    .status(200)
    .json(restoredImage ? restoredImage : "Failed to restore image");
}
