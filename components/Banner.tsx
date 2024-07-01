import SquigglyLines from "../components/SquigglyLines";
import SquigglyLinesR from "../components/SquigglyLinesR";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="relative flex items-center justify-center w-full h-screen bg-cover bg-center rounded-lg shadow-lg" style={{ backgroundImage: 'url(/ship-demo.gif)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* 蒙版层 */}
      <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>

      {/* 中央内容 */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-md">
        <h1 className="font-display text-5xl font-bold tracking-normal text-white sm:text-6xl">
          <span className="relative whitespace-nowrap text-[#3290EE]">
            <SquigglyLines />
            <span className="relative">General</span>  Scenario
          </span>{" "}
          Intelligent
          <span className="relative whitespace-nowrap text-[#3290EE]">
            <SquigglyLinesR />
            <span className="relative">High-precision</span>
          </span>{" "}
          Parsing.
        </h1>

        <Link
            className="mt-6 px-8 py-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition"
            href='/restore'
          >
            Get Started
        </Link>
        
      </div>
    </div>
  );
}