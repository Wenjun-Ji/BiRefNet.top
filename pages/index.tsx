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
import CallToActionL from "../components/CallToActionL";
import CallToActionR from "../components/CallToActionR";
import Testimonials from "../components/Testimonials";

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

      {/* <Banner></Banner> */}
	    <div className="relative-container">
        <ImageCarousel images={leftImages} direction="left" /> 
        <ImageCarousel images={rightImages} direction="right" /> 
		    <TextTiltAnimation /> 
      </div>


      <div id = "support" className="mt-40">
  <     Support />
      </div>


      <div id="features"> 
        <Features /> 
      </div>

      <div id = "calltoaction">
	      <CallToActionR imageSrc="/CallToAction/12.jpg" imageAlt="Bridge" />
	      <CallToActionL imageSrc="/CallToAction/1.jpg" imageAlt="Animal fox" />
	      <CallToActionR imageSrc="/CallToAction/17.jpg" imageAlt="flower" />
      </div>
      
      <div id = "picturebox">
        <PictureBox/>
      </div>

      

      <div id ="testimonials">
        <Testimonials />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
