import { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Support from "../components/Support";
import Features from "../components/Features";
import PictureBox from "../components/PictureBox";
import ImageCarousel from '../components/ImageCarousel'; 
import TextTiltAnimation from '../components/TextTiltAnimation'; 
import CallToActionL from "../components/CallToActionL";
import CallToActionR from "../components/CallToActionR";
import Application from "../components/Application";
import { useRef } from "react";
import Business from "../components/Business";
import { SpeedInsights } from '@vercel/speed-insights/next';

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

  // References for each section on the page
  const supportRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const examplesRef = useRef<HTMLDivElement>(null);
  const applicationsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const businessRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full flex flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>General Scenario Intelligent High-precision Parsing</title>
      </Head>
      <Header />

      <div className="relative-container relative" style={{top: '-40px'}}>
        <ImageCarousel images={leftImages} direction="left" /> 
        <ImageCarousel images={rightImages} direction="right" />
        <TextTiltAnimation />
      </div>

      <div id="support" ref={supportRef} className="" style={{top: '100px'}}>
        <Support />
      </div>

      <div id="video" ref={videoRef}> 
        <Features /> 
      </div>

      <div id="features" ref={featuresRef} className="relative" style={{top: '-20px'}}>
        <CallToActionR 
          mediaSrc="/CallToAction/2_transition.mp4" 
          title="High-precision Segmentation" 
          content="Achieve highly accurate image segmentation with our state-of-the-art technology. Perfect for medical imaging, autonomous vehicles, and more. 📊🔍" 
          buttonText="Learn More"
        />
        <CallToActionL 
          mediaSrc="/CallToAction/5_transition.mp4" 
          title="Camouflaged Objects" 
          content="Effectively detect and segment camouflaged objects in various environments using our advanced algorithms. Ideal for wildlife monitoring and surveillance. 🌲🦎🔬" 
          buttonText="Discover Now"
        />
        <CallToActionR 
          mediaSrc="/CallToAction/14_16_transition.mp4" 
          title="Industrial Detection" 
          content="Experience robust and precise detection and segmentation for industrial applications. Ensure high efficiency and accuracy in your processes with our solutions. 🏭📈🛠️" 
          buttonText="Explore Solutions"
        />
      </div>

      <div id="picturebox" ref={examplesRef}>
        <PictureBox />
      </div>

      <div id="applications" ref={applicationsRef}>
        <Application />
      </div>
      
      <div id="business" ref={businessRef}>
        <Business />
      </div>
      <SpeedInsights />
      <Footer />
    </div>
  );
};

export default Home;
