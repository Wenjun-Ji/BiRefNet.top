import React from 'react';
import ImageComparison from 'react-image-comparison';

interface ImageData {
  original: string;
  modified: string;
  title: string;
  desc: string;
}

const PictureBox: React.FC = () => {
  const imageData: ImageData[] = [
    {
      original: '/PictureBox/1.jpg',
      modified: '/PictureBox/1.png',
      title: 'Salient Object Detection',
      desc: 'Instantly identify and isolate the most important objects in your images. Our advanced algorithms pinpoint the key elements, making it easy to focus on what matters most.'
    },
    {
      original: 'PictureBox/2.jpg',
      modified: 'PictureBox/2.png',
      title: 'Camouflage Object Detection', 
      desc: 'Unmask the hidden! Our technology effortlessly detects objects cleverly concealed within complex backgrounds, revealing what others might miss.'
    },
    {
      original: 'PictureBox/3.jpg',
      modified: 'PictureBox/3.png',
      title: 'Meticulous Object Detection',
      desc: 'Experience precision like never before. Our object detection system pinpoints even the smallest details, ensuring every element is accurately identified and separated.'
    },
    {
      original: '/PictureBox/4.jpg',
      modified: '/PictureBox/4.png',
      title: 'Salient Object Detection',
      desc: 'Instantly identify and isolate the most important objects in your images. Our advanced algorithms pinpoint the key elements, making it easy to focus on what matters most.'
    },
    {
      original: 'PictureBox/5.jpg',
      modified: 'PictureBox/5.png',
      title: 'Camouflage Object Detection', 
      desc: 'Unmask the hidden! Our technology effortlessly detects objects cleverly concealed within complex backgrounds, revealing what others might miss.'
    },
    {
      original: 'PictureBox/6.jpg',
      modified: 'PictureBox/6.png',
      title: 'Meticulous Object Detection',
      desc: 'Experience precision like never before. Our object detection system pinpoints even the smallest details, ensuring every element is accurately identified and separated.'
    },
    
    // ... 其他图片数据，确保至少有9张图片
  ];
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-5xl font-bold mb-12 text-center relative" style={{ top: '-10px'}}>
          Discover the Power of Our Model
      </h2>
      <div className="grid grid-cols-3 gap-4 w-4/5 mx-auto">
        {imageData.slice(0, 9).map((item, index) => (
          <div key={index} className="relative">
            <div className="flex flex-col items-center">
              <ImageComparison
                leftImage={item.original}
                rightImage={item.modified}
                defaultImage={item.original}
                matchingWidth={200}
                style={{ width: '100%', borderRadius: '10px' }} // 添加圆角
              />
              <h3 className="mt-2 text-lg font-medium">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PictureBox;