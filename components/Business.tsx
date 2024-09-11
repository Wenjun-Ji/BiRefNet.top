import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Image, Button } from "@nextui-org/react";

export default function Business() {
  return (
    <div className="max-w-[900px] mx-auto px-8">
      <h3 className="text-5xl font-semibold mb-4 text-center">Business Collaborations</h3>
      <div className="gap-2 grid grid-cols-12">
        <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-6">
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">API</p>
            <h4 className="text-black font-medium text-2xl">Fai.ai</h4>
          </CardHeader>
          <Image
            isZoomed
            removeWrapper
            alt="Card example background"
            className="z-0 w-full h-full object-cover"
            src="/Business/faiai.webp"
          />
          <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <div>
              <p className="text-black text-tiny">Fai.ai API is now live.</p>
              <p className="text-black text-tiny">Experience our service now.</p>
            </div>
            <a href="https://fal.ai/models/fal-ai/birefnet/playground" target="_blank" rel="noopener noreferrer">
              <Button className="text-tiny px-4 py-2" color="primary" radius="full" size="sm">
                Try Now
              </Button>
            </a>
          </CardFooter>
        </Card>
        <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-6">
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">ComfyUI Extension</p>
            <h4 className="text-white/90 font-medium text-xl">ComfyUI-BiRefNet-ZHO</h4>
          </CardHeader>
          <Image
            isZoomed
            removeWrapper
            alt="Relaxing app background"
            className="z-0 w-full h-full object-cover"
            src="/Business/ComfyUI.png"
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              <div className="flex flex-col">
                <p className="text-tiny text-white/60">ComfyUI-BiRefNet-ZHO extension is now available.</p>
                <p className="text-tiny text-white/60">Experience our new features now.</p>
              </div>
            </div>
            <a href="https://github.com/ZHO-ZHO-ZHO/ComfyUI-BiRefNet-ZHO" target="_blank" rel="noopener noreferrer">
              <Button className="text-tiny px-4 py-2" radius="full" size="sm">
                Try Now
              </Button>
            </a>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}



{/*有新的合作了再加*/}
      {/* <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
          <h4 className="text-white font-medium text-large">Stream the Acme event</h4>
        </CardHeader>
        <Image
          isZoomed
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="/Business/ComfyUI.png"
        />
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">Plant a tree</p>
          <h4 className="text-white font-medium text-large">Contribute to the planet</h4>
        </CardHeader>
        <Image
          isZoomed
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="Business/replicate.png"
        />
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">Supercharged</p>
          <h4 className="text-white font-medium text-large">Creates beauty like a beast</h4>
        </CardHeader>
        <Image
          isZoomed
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="/Business/staytune.jpg"
        />
      </Card> */}