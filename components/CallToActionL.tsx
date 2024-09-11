const CallToActionL = ({ 
	mediaSrc = '/CallToAction/2_transition.mp4', // 修改为视频文件的默认路径 
	title = 'Erase any background', 
	content = 'Edit photos quickly and accurately without any effort. Photoroom simplifies your image, maintaining focus on the foreground and is twice as accurate as other apps.', 
	buttonText = 'Explore background removal' 
  }) => { 
	return (
	  <div className="flex flex-col md:flex-row items-center justify-between bg-white p-8">
		<div className="text-center md:text-left md:w-1/2 md:pr-16">
		  <h2 className="text-4xl font-bold text-gray-900 max-w-[500px] mx-auto">
			{title}
		  </h2>
		  <p className="text-base text-gray-700 mt-4 max-w-[500px] mx-auto">
			{content}
		  </p>
		  <a
			href="#"
			className="inline-block mt-6 px-6 py-3 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition duration-300"
		  >
			{buttonText}
		  </a>
		</div>
		<div className="md:mt-0 md:w-1/2">
		  <video 
			src={mediaSrc}  
			width={520}
			height={310}
			className="rounded-3xl"
			controls
		  />
		</div>
	  </div>
	);
  };
  
  export default CallToActionL;