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
import Testimonials from "../components/Testimonials";
import Application from "../components/Application";
import { useRef } from "react";
import Answer from "../components/Answer";
import Link from "next/link";


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

  return (
    <div className="w-full flex flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>General Scenario Intelligent High-precision Parsing</title>
      </Head>
      <Header />

      <div className="relative-container">
        <ImageCarousel images={leftImages} direction="left" /> 
        <ImageCarousel images={rightImages} direction="right">
          <Link className="px-10 py-5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-lg font-semibold rounded-lg shadow-lg opacity-30 hover:opacity-100 transition-opacity" href='/segment'>
            Segment your images
          </Link>
        </ImageCarousel>
        <TextTiltAnimation />         
      </div>

      <div id="support" ref={supportRef} className="mt-40">
        <Support />
      </div>

      <div id="video" ref={videoRef}> 
        <Features /> 
      </div>

      <div id="features" ref={featuresRef}>
        <CallToActionR imageSrc="/CallToAction/12.jpg" imageAlt="Bridge" />
        <CallToActionL imageSrc="/CallToAction/1.jpg" imageAlt="Animal fox" />
        <CallToActionR imageSrc="/CallToAction/17.jpg" imageAlt="flower" />
        <CallToActionL imageSrc="/CallToAction/1.jpg" imageAlt="Bridge" />
      </div>

      <div id="picturebox" ref={examplesRef}>
        <PictureBox />
      </div>

      <div id="contact" ref={contactRef}>
        <Testimonials />
      </div>

      
      <div id="applications" ref={applicationsRef}>
        <Application />
      </div>

      <Answer/>

      <Footer />
    </div>
  );
};

export default Home;
