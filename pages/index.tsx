import { NextPage } from "next";
import Head from "next/head";
import CustomCard from "../components/CustomCard";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Support from "../components/Support";
import Features from "../components/Feature";
import PictureBox from "../components/PictureBox";
import ImageCarousel from '../components/ImageCarousel'; 
import TextTiltAnimation from '../components/TextTiltAnimation';

const Home: NextPage = () => {
  const leftImages = [
    '/ImageCarousel/2.jpg',
    '/ImageCarousel/3.jpg',
    '/ImageCarousel/6.jpg',
    '/ImageCarousel/7.jpg'
  ];

  const rightImages = [
    '/ImageCarousel/8.jpg',
    '/ImageCarousel/10.jpg',
    '/ImageCarousel/12.jpg',
    '/ImageCarousel/15.jpg'
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>General Scenario Intelligent High-precision Parsing</title>
      </Head>
      <Header />

      <div className="relative-container">
        <ImageCarousel images={leftImages} direction="left" />
        <ImageCarousel images={rightImages} direction="right" />
        <TextTiltAnimation />
      </div>
      <Support />
      <Features />
      <PictureBox />


      <div className="flex flex-wrap justify-center gap-6 p-6">
        <CustomCard
          imageSrc="/CustomCard/11.jpg"
          imageAlt="AI Background Remover"
          title="AI Background Remover"
          description="Automatically remove the background of your image."
        />
        <CustomCard
          imageSrc="/CustomCard/1.jpg"
          imageAlt="AI Backgrounds"
          title="AI Backgrounds"
          description="Generate realistic backgrounds in less than a second."
        />
        <CustomCard
          imageSrc="/CustomCard/17.jpg"
          imageAlt="Blur Background"
          title="Blur Background"
          description="Automatically blur the background of your image."
        />
        <CustomCard
          imageSrc="/CustomCard/18.jpg"
          imageAlt="AI Retouch"
          title="AI Retouch"
          description="Remove unwanted parts of your image with a swipe."
        />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
