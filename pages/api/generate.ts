import { Ratelimit } from "@upstash/ratelimit";
import type { NextApiRequest, NextApiResponse } from "next";
import requestIp from "request-ip";
import redis from "../../utils/redis";

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
  // POST request to Replicate to start the image restoration generation process
  let startResponse = await fetch("https://api.replicate.com/v1/predictions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Token " + process.env.REPLICATE_API_KEY,
    },
    body: JSON.stringify({
      version:
       "f3e7ae8430032db9e9923c65f95ddf9f5b7ded8b7780163f18d1db67215dbd6d",
      input: { image: imageUrl},
    }),
  });

  let jsonStartResponse = await startResponse.json();
  let endpointUrl = jsonStartResponse.urls.get;

  // GET request to get the status of the image restoration process & return the result when it's ready
  let restoredImage: string | null = null;
  const startTime = Date.now();
  const maxDuration = 300000; //  最大时间 300 seconds 

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
        Authorization: "Token " + process.env.REPLICATE_API_KEY,
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
