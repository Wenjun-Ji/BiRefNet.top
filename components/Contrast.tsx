import React from 'react';
import ImageComparison from 'react-image-comparison';

interface ImageData {
  original: string;
  modified: string;
  title: string;
  desc: string;
}

const Contrast: React.FC = () => {
  const imageData: ImageData[] = [
    {
        original: '/Contrast/8.jpg',
        modified: '/Contrast/8.png',
        title: 'BiRefNet',
        desc: 'BiRefNet effectively identifies and precisely segments a seaplane, capturing even the propellers and small parts.'
      },
      {
        original: 'Contrast/8.jpg',
        modified: 'Contrast/8-ps.png',
        title: 'Adobe Photoshop',
        desc: 'Adobe Photoshop’s one-click background removal fails to remove the background completely, resulting in poor segmentation.'
      },
      {
        original: 'Contrast/8.jpg',
        modified: 'Contrast/8-psex.png',
        title: 'Adobe Express',
        desc: 'Adobe Express segments the seaplane’s outline but misses many details and includes irrelevant ropes.'
      },

    {
      original: '/Contrast/3.jpg',
      modified: '/Contrast/3.png',
      title: 'BiRefNet',
      desc: 'BiRefNet effectively identifies and precisely segments a camouflaged green lizard.'
    },
    {
      original: 'Contrast/3.jpg',
      modified: 'Contrast/3-ps.png',
      title: 'Adobe Photoshop',
      desc: 'Adobe Photoshop’s one-click background removal struggles to recognize the lizard, resulting in a poor segmentation.'
    },
    {
      original: 'Contrast/3.jpg',
      modified: 'Contrast/3-psex.png',
      title: 'Adobe Express',
      desc: 'Adobe Express segments the lizard but includes branches in the segmentation.'
    },
    {
      original: '/Contrast/9.jpg',
      modified: '/Contrast/9.png',
      title: 'BiRefNet',
      desc: 'BiRefNet accurately identifies and segments a parachute and a skydiver, even capturing the parachute’s thin lines.'
    },
    {
      original: 'Contrast/9.jpg',
      modified: 'Contrast/9-ps.png',
      title: 'Adobe Photoshop',
      desc: 'Adobe Photoshop’s one-click background removal segments the figure and parachute but misses some details and does not retain the parachute’s thin lines.'
    },
    {
      original: 'Contrast/9.jpg',
      modified: 'Contrast/9-psex.png',
      title: 'Adobe Express',
      desc: 'Adobe Express only segments the figure, losing the parachute in the process.'
    },
  ];
  return (
    <div className="container mx-auto px-4 m-10">
      <h2 className="text-5xl font-bold mb-12 text-center relative" style={{ top: '10px'}}>
          BiRefNet vs Adobe Photoshop vs Adobe Express
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

export default Contrast;
