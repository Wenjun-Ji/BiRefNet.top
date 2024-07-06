import { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer";
import RestoreHeader from "../components/SegmentHeader";
import Demo from "../components/Demo";
import Application from "../components/Application";
import CallToActionR from "../components/CallToActionR";
import CallToActionL from "../components/CallToActionL";
import { useRef } from "react";
import Testimonials from "../components/Testimonials";
import Business from "../components/Business";
import Contrast from "../components/Contrast";
import SegmentHeader from "../components/SegmentHeader";

// References for each section on the page

const Restore: NextPage = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>Restore Photos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <SegmentHeader />

      <div id="demo">
      <Demo />
      </div>
      

      <div id="contrast" className="" style={{top : 'px'}}>
        <Contrast />
      </div>

      <div id="contact">
        <Testimonials />
      </div>

      <Footer />
    </div>
  );
};

export default Restore;
