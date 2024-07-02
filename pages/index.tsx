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





const Home: NextPage = () => {
  // 渲染页面
  return (
    <div className="w-full flex flex-col items-center justify-center py-2 min-h-screen">

      <Head>
        <title>General Scenario Intelligent High-precision Parsing</title>
      </Head>
      <Header />
      <Banner></Banner>

      <Features />

      <Support/>

      <CallToActionR />
      <CallToActionL />
      <CallToActionR />

      
      <PictureBox/>
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
