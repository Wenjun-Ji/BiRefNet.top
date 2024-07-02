import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";

import Banner from "../components/Banner";

import CallToActionL from "../components/CallToActionL";
import CallToActionR from "../components/CallToActionR";

import SquigglyLines from "../components/SquigglyLines";
import { Testimonials } from "../components/Testimonials";
import Features from "../components/Feature";
import Support from "../components/Support";
import PictureBox from "../components/PictureBox";
import ImageCarousel from '../components/ImageCarousel'; 
import TextTiltAnimation from '../components/TextTiltAnimation'; 





const Home: NextPage = () => {
  // 图片数组
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

  // 渲染页面
  return (
    <div className="w-full flex flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>General Scenario Intelligent High-precision Parsing</title>
      </Head>
      <Header />
      {/* <Banner></Banner> */}

	  <div className="relative-container">
        <ImageCarousel images={leftImages} direction="left" /> 
        <ImageCarousel images={rightImages} direction="right" /> 
		<TextTiltAnimation /> 
      </div>
      <Support/>
      <Features />

	


	  <CallToActionR imageSrc="/CallToAction/12.jpg" imageAlt="Bridge" />
	  <CallToActionL imageSrc="/CallToAction/1.jpg" imageAlt="Animal fox" />
	  <CallToActionR imageSrc="/CallToAction/17.jpg" imageAlt="flower" />
      <PictureBox/>
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
