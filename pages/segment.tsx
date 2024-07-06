import { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer";
import Demo from "../components/Demo";
import Contrast from "../components/Contrast";
import SegmentHeader from "../components/SegmentHeader";

// References for each section on the page

const Restore: NextPage = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>Birefnet Segmentation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <SegmentHeader />

      <div id="demo">
      <Demo />
      </div>
      

      <div id="contrast" className="" style={{top : 'px'}}>
        <Contrast />
      </div>

      <Footer />
    </div>
  );
};

export default Restore;
