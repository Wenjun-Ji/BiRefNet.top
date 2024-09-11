import { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer";
import PriceHeader from "../components/PriceHeader";
import Answer from "../components/Answer";
import Price from "../components/Price";

// References for each section on the page

const Segment: NextPage = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>Birefnet Segmentation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <PriceHeader />

      <div id="price" className="w-full px-4 sm:px-6 lg:px-8">
        <Price />
      </div>
      
      <div id="answer" className="w-full px-4 sm:px-6 lg:px-8 mt-4">
        <Answer />
      </div>
      
      <Footer/>

    </div>
  );
};

export default Segment;
