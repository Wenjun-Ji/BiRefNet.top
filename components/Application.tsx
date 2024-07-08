import React, { useState } from 'react';
import CustomCard from './CustomCard'; // 确保你已经引入了 CustomCard 组件

interface CardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  type: 'light' | 'heavy';
}

const Application: React.FC = () => {
  const [cards, setCards] = useState<CardProps[]>([
    // 轻型应用
    {
      imageSrc: '/CustomCard/bg-removal.gif',
      imageAlt: 'Image Background Removal',
      title: 'Image Background Removal',
      description: '',
      type: 'light',
    },
    {
      imageSrc: '/CustomCard/ship-demo.gif',
      imageAlt: 'Art Design',
      title: 'Art Design',
      description: '',
      type: 'light',
    },
    {
      imageSrc: '/CustomCard/view-move.gif',
      imageAlt: 'Simulate View Motion',
      title: 'Simulate View Motion',
      description: '',
      type: 'light',
    },
    {
      imageSrc: '/CustomCard/motor-demo.gif',
      imageAlt: 'AR application based on Images',
      title: 'AR application on Images',
      description: '',
      type: 'light',
    },
    {
      imageSrc: '/CustomCard/motor-video.gif',
      imageAlt: 'AR application based on videos',
      title: 'AR application on videos',
      description: '',
      type: 'light',
    },
    {
      imageSrc: '/CustomCard/video-3d.gif',
      imageAlt: '3D Video Production',
      title: '3D Video Production',
      description: '',
      type: 'light',
    },
    // 重型应用
	{
		imageSrc: '/CustomCard/agriculture.png',
		imageAlt: "Precision Agriculture",
		title: "Precision Agriculture",
		description: "This technology helps monitor crop health, detect pests and diseases, estimate yields, and optimize resources.  Source: [NWRD] ",
		type: "heavy"
	},
	  
	{
		"imageSrc": "/CustomCard/medicine.png",
		"imageAlt": "Medical Image Segmentation",
		"title": "Medical Image Segmentation",
		"description": "This technology aids in disease diagnosis, and treatment planning. red boxes highlight detected results. Source: [Lung-PET-CT-Dxe]",
		"type": "heavy"
	},
	  
    {
      imageSrc: '/CustomCard/1.gif',
      imageAlt: 'Robotic Surgery',
      title: 'Robotic Surgery',
      description: 'Highly precise robotic surgery powered by AI for improved outcomes.',
      type: 'heavy',
    },
  ]);

  const lightCards = cards.filter(card => card.type === 'light');
  const heavyCards = cards.filter(card => card.type === 'heavy');

  return (
    <div className="mt-16">
      <h3 className="text-5xl font-semibold mb-4 text-center">Light Applications</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {lightCards.map((card, index) => (
          <CustomCard
            key={index}
            imageSrc={card.imageSrc}
            imageAlt={card.imageAlt}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
      <h3 className="text-5xl font-semibold mb-4 text-center mt-8">Heavy Applications</h3>
	  <p className="text-1xl font-semibold mb-4 text-center">Striving to achieve</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {heavyCards.map((card, index) => (
          <CustomCard
            key={index}
            imageSrc={card.imageSrc}
            imageAlt={card.imageAlt}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Application;
