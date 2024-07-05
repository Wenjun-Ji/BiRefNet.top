import React from 'react';
import { useRouter } from 'next/router';
import { Button } from '@nextui-org/react';
import confetti from 'canvas-confetti';

interface CustomButtonProps {
  text: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ text }) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      angle: 90,
      startVelocity: 30,
      gravity: 0.5,
      ticks: 200,
      colors: ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF']
    });
    // 小延迟以确保纸屑效果被触发
    setTimeout(() => {
      router.push('/segment');
    }, 300);
  };

  return (
    <Button
      disableRipple
      className="relative overflow-visible rounded-full hover:-translate-y-1 px-12 py-10 shadow-xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-opacity-70 hover:bg-opacity-70 text-white after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/15 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0"
      size="lg"
      onClick={handleClick}
    >
      <span className="font-bold text-2xl">{text}</span>
    </Button>
  );
};

export default CustomButton;
