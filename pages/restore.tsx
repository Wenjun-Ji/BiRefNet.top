import { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer";
import RestoreHeader from "../components/RestoreHeader";
import Demo from "../components/Demo";
import Application from "../components/Application";
import CallToActionR from "../components/CallToActionR";
import CallToActionL from "../components/CallToActionL";
import { useRef } from "react";

  // References for each section on the page

const Restore: NextPage = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>Restore Photos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <RestoreHeader />
      <Demo />
      
      <div id="features">
        <CallToActionR imageSrc="/CallToAction/12.jpg" imageAlt="Bridge" />
        <CallToActionL imageSrc="/CallToAction/1.jpg" imageAlt="Animal fox" />
        <CallToActionR imageSrc="/CallToAction/17.jpg" imageAlt="flower" />
        <CallToActionL imageSrc="/CallToAction/1.jpg" imageAlt="Bridge" />
      </div>

      <div id="applications">
        <Application />
      </div>

      <Footer />
    </div>
  );
};

export default Restore;
