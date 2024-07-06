import Image from 'next/image';

const CallToActionR = ({ imageSrc = '/og-image.png', imageAlt = 'AI Generated Backgrounds' }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white p-8">
      <div className="mt-2 md:mt-0 md:w-1/2" >
        <Image 
          src={imageSrc}  
          alt={imageAlt}
          width={520}
          height={310}
          className="rounded-3xl"
        />
      </div>
      <div className="text-center md:text-left md:w-1/2 md:pl-16">
        <h2 className="text-4xl font-bold text-gray-900 max-w-[500px] mx-auto">
			Erase any background
        </h2>
        <p className="text-base text-gray-700 mt-4 max-w-[500px] mx-auto">
		Edit photos quickly and accurately without any effort. Photoroom simplifies your image, maintaining focus on the foreground and is twice as accurate as other apps.
        </p>
        <a
          href="#"
          className="inline-block mt-6 px-6 py-3 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition duration-300"
        >
          Explore background removal
        </a>
      </div>
    </div>
  );
};

export default CallToActionR;
