import { Typewriter } from "react-simple-typewriter";
import SectionHead from "../components/SectionHead";

const About = () => {
  const words = [
    "MERN Stack Web Developer",
    "Frontend Developer",
    "Web Developer",
  ];

  // ?? Handle Download Resume
  const handleDownload = () => {
    const resumeUrl =
      "https://drive.google.com/file/d/1gbgYYVTUGtmRkxuQxqSXwBBR3qO4VqXO/view?usp=sharing";
    const fileIdMatch = resumeUrl.match(/[-\w]{25,}/);
    const fileId = fileIdMatch?.[0] ?? "";
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
    window.location.href = downloadUrl;
  };
  return (
    <section className="section" id="about">
      <SectionHead parallaxValue="About" value="About me" />
      <div className="lg:pt-6 lg:grid grid-cols-2 gap-20">
        <p className="text-desc-color lg:text-lg text-justify">
          Sumon Chandra Shil is a skilled MERN stack web developer with
          expertise in ReactJS, Typescript, MongoDB, ExpressJS, NodeJS, and
          various other technologies related to JavaScript and Typescript. With
          a passion for crafting dynamic and interactive web applications, Sumon
          brings creativity and proficiency to every project. With a keen eye
          for detail and a strong problem-solving mindset, Sumon is committed to
          delivering high-quality, efficient, and user-friendly solutions. From
          front-end development to back-end implementation, Sumon possesses the
          comprehensive skills necessary to build robust and scalable web
          applications.
        </p>
        <div className="space-y-4 lg:mt-0 mt-4">
          <h3 className="lg:text-2xl text-lg font-black">
            Hi, I am a{" "}
            <span className="text-main-color">
              <Typewriter
                words={words}
                loop={0}
                cursor={true}
                cursorColor="rgb(114 226 174)"
              />
            </span>
          </h3>
          <ul className="list-disc list-inside space-y-3">
            <li className="about-list relative">
              <strong className="inline-block lg:min-w-[120px] min-w-[100px] font-medium">
                First Name
              </strong>
              : Sumon Chandra
            </li>
            <li className="about-list relative">
              <strong className="inline-block lg:min-w-[120px] min-w-[100px] font-medium">
                Last Name
              </strong>
              : Shil
            </li>
            <li className="about-list relative">
              <strong className="inline-block lg:min-w-[120px] min-w-[100px] font-medium">
                Age
              </strong>
              : 22 years
            </li>
            <li className="about-list relative">
              <strong className="inline-block lg:min-w-[120px] min-w-[100px] font-medium">
                Nationality
              </strong>
              : Bangladesh
            </li>
            <li className="about-list relative">
              <strong className="inline-block lg:min-w-[120px] min-w-[100px] font-medium">
                Language
              </strong>
              : English, Bengali
            </li>
            <li className="about-list relative">
              <strong className="inline-block lg:min-w-[120px] min-w-[100px] font-medium">
                Address
              </strong>
              : Habiganj, Sylhet, Bangladesh
            </li>
          </ul>
          <button onClick={handleDownload} className="social-btn">
            <span>Download Resume</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
