import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import AOS from "aos";

import "./index.css";
import { ParallaxProvider } from "react-scroll-parallax";
import "aos/dist/aos.css";
AOS.init();
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ParallaxProvider>
      <App />
    </ParallaxProvider>
  </React.StrictMode>
);
