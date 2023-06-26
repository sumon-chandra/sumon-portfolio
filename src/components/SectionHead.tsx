import { Parallax } from "react-scroll-parallax";
import { SectionTitles } from "../types";
const SectionHead = ({ parallaxValue, value }: SectionTitles) => {
  return (
    <>
      <Parallax translateX={[-200, 200]} className="">
        <h3 className="lg:text-[200px] text-[100px] text-[#1B2335] font-black leading-[145px] uppercase">
          {parallaxValue}
        </h3>
      </Parallax>
      <div className="absolute top-4 lg:right-[40%] right-[25%] left-[25%] lg:left-[40%] text-center text-xl">
        <h3 className="uppercase text-2xl pb-4 font-black">{value}</h3>
        <div className="w-full bg-sec-color rounded-xl h-2 section-underline relative"></div>
      </div>
    </>
  );
};

export default SectionHead;
