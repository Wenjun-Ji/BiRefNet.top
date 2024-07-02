import Image from 'next/image';

const CallToActionL = ({ imageSrc = '/og-image.png', imageAlt = 'AI Generated Backgrounds' }) => { 
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white p-8 mb-8">
      <div className="text-center md:text-left md:w-1/2 md:pr-16">
        <h2 className="text-3xl font-bold text-gray-900 max-w-[500px] mx-auto">
          使用AI即时创建背景
        </h2>
        <p className="text-lg text-gray-700 mt-4 max-w-[500px] mx-auto">
          Photoroom利用AI的力量在几秒钟内为您的产品图片创建逼真、具有工作室质量的背景。或者试试我们的文本到图像工具，从你的想象力提示中即时生成视觉效果。
        </p>
        <a
          href="#"
          className="inline-block mt-6 px-6 py-3 bg-black text-white text-lg font-medium rounded hover:bg-gray-800 transition duration-300"
        >
          探索AI背景
        </a>
      </div>
      <div className="mt-8 md:mt-0 md:w-1/2">
        <Image
          src={imageSrc}  
          alt={imageAlt}
          width={500}
          height={300}
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default CallToActionL;