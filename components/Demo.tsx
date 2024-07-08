import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import CountUp from "react-countup";
import { UploadDropzone } from "react-uploader";
import { Uploader } from "uploader";
import { CompareSlider } from "./CompareSlider";
import Toggle from "./Toggle";
import LoadingDots from "./LoadingDots";
import appendNewToName from "../utils/appendNewToName";
import downloadPhoto from "../utils/downloadPhoto";
import NSFWPredictor from "../utils/nsfwCheck";
import va from "@vercel/analytics";

// Configuration for the uploader
const uploader = Uploader({
  apiKey: !!process.env.NEXT_PUBLIC_UPLOAD_API_KEY
    ? process.env.NEXT_PUBLIC_UPLOAD_API_KEY
    : "free",
});
const options = {
  maxFileCount: 1,
  mimeTypes: ["image/jpeg", "image/png", "image/jpg"],
  editor: { images: { crop: false } },
  styles: { colors: { primary: "#000" } },
  onValidate: async (file: File): Promise<undefined | string> => {
    let isSafe = false;
    try {
      isSafe = await NSFWPredictor.isSafeImg(file);
      if (!isSafe)
      // va.track("NSFW Image blocked");
      console.log("NSFW Image blocked");
    } catch (error) {
      console.error("NSFW predictor threw an error", error);
    }
    return isSafe
      ? undefined
      : "Detected a NSFW image which is not allowed. If this was a mistake, please contact me at hassan@hey.com";
  },
};

const Demo = () => {
  const [originalPhoto, setOriginalPhoto] = useState<string | null>(null);
  const [segmentedImage, setsegmentedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [segmentedLoaded, setsegmentedLoaded] = useState<boolean>(false);
  const [sideBySide, setSideBySide] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [photoName, setPhotoName] = useState<string | null>(null);

  const sampleImages = [
    "/Demo/fox.jpg",
    "/Demo/crossbow.jpg",
    "/Demo/tennis_racket.jpg",
    "/Demo/ground.jpg",
  ];

  const localSegmentedImages: { [key: string]: string } = {
    "/Demo/fox.jpg": "/Demo/seg/fox.png",
    "/Demo/crossbow.jpg": "/Demo/seg/crossbow.png",
    "/Demo/tennis_racket.jpg": "/Demo/seg/tennis_racket.png",
    "/Demo/ground.jpg": "/Demo/seg/ground.png",
  };

  const UploadDropZone = () => (
    <UploadDropzone
      uploader={uploader}
      options={options}
      onUpdate={(file) => {
        if (file.length !== 0) {
          setPhotoName(file[0].originalFile.originalFileName);
          setOriginalPhoto(file[0].fileUrl.replace("raw", "thumbnail"));
          generatePhoto(file[0].fileUrl.replace("raw", "thumbnail"));
        }
      }}
      width="670px"
      height="250px"
    />
  );

  async function generatePhoto(fileUrl: string) {
    await new Promise((resolve) => setTimeout(resolve, 500));
    setLoading(true);
    const res = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ imageUrl: fileUrl }),
    });

    let newPhoto = await res.json();
    if (res.status !== 200) {
      setError(newPhoto);
    } else {
      setsegmentedImage(newPhoto);
    }
    setLoading(false);
  }

  const handleSampleClick = (sampleUrl: string) => {
    setOriginalPhoto(sampleUrl);
    setsegmentedImage(localSegmentedImages[sampleUrl]);
    setPhotoName(sampleUrl.split('/').pop() || "sample"); // Extract file name from URL or use 'sample'
  };

  return (
    <div className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 mt-4 sm:mb-0 mb-8">
      <h1 className="mx-auto max-w-4xl font-display text-4xl font-bold tracking-normal text-slate-900 sm:text-6xl mb-5">
        Dichotomous Segmentation
        <br />
        Any Photo
      </h1>
      <p className="text-slate-500">
	  Upload your image or try a sample
      </p>
      <AnimatePresence mode="wait">
        <motion.div className="flex justify-between items-center w-full flex-col mt-4">
          <Toggle
            className={`${segmentedLoaded ? "visible" : "invisible"} mb-6`}
            sideBySide={sideBySide}
            setSideBySide={(newVal) => setSideBySide(newVal)}
          />
          {!originalPhoto && <UploadDropZone />}
          {!originalPhoto && (
            <div className="mt-4">
              <h2 className="mb-2 font-medium text-lg">Sample Images</h2>
              <div className="flex space-x-4 justify-center">
                {sampleImages.map((url, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -10 }}
                    className="cursor-pointer"
                    onClick={() => handleSampleClick(url)}
                    style={{ width: 100, height: 100, position: 'relative' }}
                  >
                    <Image
                      src={url}
                      alt={`Sample ${index + 1}`}
                      className="rounded-2xl shadow-md"
                      fill
                      style={{ objectFit: 'cover', objectPosition: 'center' }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          )}
          {originalPhoto && !segmentedImage && (
            <Image
              alt="original photo"
              src={originalPhoto}
              className="rounded-2xl shadow-md"
              width={475}
              height={475}
            />
          )}
          {segmentedImage && originalPhoto && sideBySide && (
            <CompareSlider
              original={originalPhoto!}
              segmented={segmentedImage!}
            />
          )}
          {segmentedImage && originalPhoto && !sideBySide && (
            <div className="flex sm:space-x-4 sm:flex-row flex-col">
              <div>
                <h2 className="mb-1 font-medium text-lg">Original Image</h2>
                <Image
                  alt="original photo"
                  src={originalPhoto}
                  className="rounded-2xl relative shadow-md"
                  width={475}
                  height={475}
                />
              </div>
              <div className="sm:mt-0 mt-8">
                <h2 className="mb-1 font-medium text-lg">Segmented Image</h2>
                <a href={segmentedImage} target="_blank" rel="noreferrer">
                  <Image
                    alt="segmented photo"
                    src={segmentedImage}
                    className="rounded-2xl relative sm:mt-0 mt-2 cursor-zoom-in shadow-md"
                    width={475}
                    height={475}
                    onLoadingComplete={() => setsegmentedLoaded(true)}
                  />
                </a>
              </div>
            </div>
          )}
          {loading && (
            <button
              disabled
              className="bg-black rounded-full text-white font-medium px-4 pt-2 pb-3 mt-8 hover:bg-black/80 w-40"
            >
              <span className="pt-4">
                <LoadingDots color="white" style="large" />
              </span>
            </button>
          )}
          {error && (
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl mt-8"
              role="alert"
            >
              <span className="block sm:inline">{error}</span>
            </div>
          )}
          <div className="flex space-x-2 justify-center">
            {originalPhoto && !loading && (
              <button
                onClick={() => {
                  setOriginalPhoto(null);
                  setsegmentedImage(null);
                  setsegmentedLoaded(false);
                  setSideBySide(false);
                  setError(null);
                }}
                className="bg-black rounded-full text-white font-medium px-4 py-2 mt-8 hover:bg-black/80 transition"
              >
                Upload New Photo
              </button>
            )}
            {segmentedLoaded && (
              <button
                onClick={() => {
                  if (photoName) {
                    downloadPhoto(segmentedImage!, appendNewToName(photoName));
                  }
                }}
                className="bg-white rounded-full text-black border font-medium px-4 py-2 mt-8 hover:bg-gray-100 transition"
              >
                Download segmented Photo
              </button>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Demo;
