import { useState } from "react";
import pattern from "../assets/pattern.png";
import profile from "../assets/profile.png";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaAngleDown,
} from "react-icons/fa";
import MouseAnimation from "./MouseAnimation";
const Hero = () => {
  const [isImgLoaded, setIsImgLoaded] = useState<boolean>(true);
  return (
    <section style={{ backgroundImage: `url(${pattern})` }} className="relative">
      <MouseAnimation />
      <div className="relative flex flex-col items-center justify-center min-h-screen gap-8 p-5 lg:p-0">
        <div className="shadow-2xl conic shadow-sec-color">
          <img
            src={profile}
            className={`img ${isImgLoaded ? "blur-img" : ""}`}
            loading="lazy"
            onLoad={() => setIsImgLoaded(false)}
          />
        </div>
        <h3 className="text-2xl font-bold lg:text-5xl">
          Hi, I'm <span className="text-main-color">Sumon Chandra Shil</span>
        </h3>
        <p className="text-xs text-center lg:text-lg lg:w-1/2 text-desc-color">
          I am a  Web Developer. I can provide clean code and pixel
          perfect design. I also make website more & more interactive with web
          animations.
        </p>
        <div className="flex items-center gap-6">
          <a
            className="social-btn"
            href="https://www.facebook.com/SumonChandraForever"
            target="_blank"
          >
            <FaFacebookF />
          </a>
          <a
            className="social-btn"
            href="https://www.linkedin.com/in/sumonchandra/"
            target="_blank"
          >
            <FaLinkedinIn />
          </a>
          <a
            className="social-btn"
            href="https://github.com/sumon-chandra"
            target="_blank"
          >
            <FaGithub />
          </a>
          <a
            className="social-btn"
            href="https://twitter.com/Sumon__Chandra"
            target="_blank"
          >
            <FaTwitter />
          </a>
        </div>
        <div className="absolute flex gap-2 text-xs text-desc-color bottom-4">
          <span className="text-xl animate-bounce">
            <FaAngleDown />
          </span>
          <span>Scroll Down</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
