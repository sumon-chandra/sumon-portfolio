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
const Hero = () => {
  const [isImgLoaded, setIsImgLoaded] = useState<boolean>(true);
  return (
    <section style={{ backgroundImage: `url(${pattern})` }}>
      <div className="flex flex-col items-center justify-center min-h-screen gap-8 relative lg:p-0 p-5">
        <div className="conic shadow-2xl shadow-sec-color">
          <img
            src={profile}
            className={`img ${isImgLoaded ? "blur-img" : ""}`}
            loading="lazy"
            onLoad={() => setIsImgLoaded(false)}
          />
        </div>
        <h3 className="lg:text-5xl text-2xl font-bold">
          Hi, I'm <span className="text-main-color">Sumon Chandra Shil</span>
        </h3>
        <p className="lg:text-lg text-xs lg:w-1/2 text-center text-desc-color">
          I am a MERN Stack web developer. I can provide clean code and pixel
          perfect design. I also make website more & more interactive with web
          animations.
        </p>
        <div className="flex gap-6 items-center">
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
        <div className="text-xs text-desc-color flex gap-2 absolute bottom-4">
          <span className="animate-bounce text-xl">
            <FaAngleDown />
          </span>
          <span>Scroll Down</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
