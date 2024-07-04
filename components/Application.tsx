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
      imageSrc: '/CustomCard/11.jpg',
      imageAlt: 'AI Background Remover',
      title: 'AI Background Remover',
      description: 'Automatically remove the background of your image.',
      type: 'light',
    },
    {
      imageSrc: '/CustomCard/1.jpg',
      imageAlt: 'AI Backgrounds',
      title: 'AI Backgrounds',
      description: 'Generate realistic backgrounds in less than a second.',
      type: 'light',
    },
    {
      imageSrc: '/CustomCard/11.jpg',
      imageAlt: 'AI Background Remover',
      title: 'AI Background Remover',
      description: 'Automatically remove the background of your image.',
      type: 'light',
    },
    {
      imageSrc: '/CustomCard/1.jpg',
      imageAlt: 'AI Backgrounds',
      title: 'AI Backgrounds',
      description: 'Generate realistic backgrounds in less than a second.',
      type: 'light',
    },
    {
      imageSrc: '/CustomCard/11.jpg',
      imageAlt: 'AI Background Remover',
      title: 'AI Background Remover',
      description: 'Automatically remove the background of your image.',
      type: 'light',
    },
    {
      imageSrc: '/CustomCard/1.jpg',
      imageAlt: 'AI Backgrounds',
      title: 'AI Backgrounds',
      description: 'Generate realistic backgrounds in less than a second.',
      type: 'light',
    },
    // 重型应用
    {
      imageSrc: '/CustomCard/1.jpg',
      imageAlt: 'AI Video Editor',
      title: 'AI Video Editor',
      description: 'Advanced video editing powered by AI.',
      type: 'heavy',
    },
    {
      imageSrc: '/CustomCard/11.jpg',
      imageAlt: 'AI Music Composer',
      title: 'AI Music Composer',
      description: 'Compose music with the help of AI.',
      type: 'heavy',
    },
    {
      imageSrc: '/CustomCard/1.jpg',
      imageAlt: 'AI 3D Modeling',
      title: 'AI 3D Modeling',
      description: 'Create 3D models quickly using AI.',
      type: 'heavy',
    },
  ]);

  const lightCards = cards.filter(card => card.type === 'light');
  const heavyCards = cards.filter(card => card.type === 'heavy');

  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Applications
      </h2>
      <h3 className="text-2xl font-semibold mb-4 text-center">Light Applications</h3>
      <div className="flex flex-wrap justify-center gap-6 p-6">
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
      <h3 className="text-2xl font-semibold mb-4 text-center mt-8">Heavy Applications</h3>
      <div className="flex flex-wrap justify-center gap-6 p-6">
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
