import SquigglyLines from "../components/SquigglyLines";
import SquigglyLinesR from "../components/SquigglyLinesR";

export default function Banner() {
  return (
    <div className="relative flex items-center justify-center w-full h-screen bg-cover bg-center rounded-lg shadow-lg" style={{ backgroundImage: 'url(/ship-demo.gif)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* 蒙版层 */}
      <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>

      {/* 中央内容 */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-md">
        <h1 className="font-display text-3xl font-bold tracking-normal text-white sm:text-5xl">
          <span className="relative whitespace-nowrap text-[#3290EE]">
            <SquigglyLines />
            <span className="relative">General</span>
          </span>{" "}
          Scenario Intelligent
          <span className="relative whitespace-nowrap text-[#3290EE]">
            <SquigglyLinesR />
            <span className="relative">High-precision</span>
          </span>{" "}
          Parsing.
        </h1>
        <button className="mt-4 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition">
          Get Started
        </button>
      </div>
    </div>
  );
}