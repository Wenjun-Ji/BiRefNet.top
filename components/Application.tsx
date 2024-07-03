import React, { useState } from 'react';
import CustomCard from './CustomCard'; // 确保你已经引入了 CustomCard 组件

interface CardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

const Application: React.FC = () => {
  const [cards, setCards] = useState<CardProps[]>([
    {
      imageSrc: '/CustomCard/11.jpg',
      imageAlt: 'AI Background Remover',
      title: 'AI Background Remover',
      description: 'Automatically remove the background of your image.',
    },
    {
      imageSrc: '/CustomCard/1.jpg',
      imageAlt: 'AI Backgrounds',
      title: 'AI Backgrounds',
      description: 'Generate realistic backgrounds in less than a second.',
    },
    {
        imageSrc: '/CustomCard/11.jpg',
        imageAlt: 'AI Background Remover',
        title: 'AI Background Remover',
        description: 'Automatically remove the background of your image.',
    },

    {
        imageSrc: '/CustomCard/1.jpg',
        imageAlt: 'AI Backgrounds',
        title: 'AI Backgrounds',
        description: 'Generate realistic backgrounds in less than a second.',
    },
    // ... 添加更多默认卡片数据
  ]);

  return (
    <div className="mt-16"> {/* 添加 mt-16 类来增加距离 */}
      <h2 className="text-3xl font-bold mb-6 text-center">
        Applications
      </h2>
      <div className="flex flex-wrap justify-center gap-6 p-6">
        {cards.map((card, index) => (
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