import { Typewriter } from "react-simple-typewriter";
import SectionHead from "../components/SectionHead";

const About = () => {
  const words = [
    "Web Developer",
    "Frontend Developer",
    "MERN Stack Web Developer",
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
      <div className="grid-cols-2 gap-20 lg:mt-20 lg:grid">
        <p
          data-aos="fade-right"
          data-aos-duration="2000"
          className="text-justify text-desc-color lg:text-lg"
        >
          Sumon Chandra Shil is a skilled Web Developer with a passion for creating user-friendly and visually appealing websites. Over the past year, he has increased his skills in Web Development, and that was an exciting journey for him. During this learning period, he has dived deep into various web technologies and tools with gained expertise in building websites. He has been also exploring modern frameworks and libraries like ReactJS and NodeJS for the backend to create dynamic and interactive user interfaces. various other technologies related to JavaScript and Typescript. With a passion for crafting dynamic and interactive web applications, Sumon brings creativity and proficiency to every project. With a keen eye for detail and a strong problem-solving mindset, Sumon is committed to delivering high-quality, efficient, and user-friendly solutions. From front-end development to back-end implementation, Sumon possesses the comprehensive skills necessary to build robust and scalable web applications.

        </p>
        <div
          data-aos="fade-left"
          data-aos-duration="2000"
          className="mt-4 space-y-4 lg:mt-0"
        >
          <h3 className="text-lg font-black lg:text-2xl">
            I am a{" "}
            <span className="text-main-color">
              <Typewriter
                words={words}
                loop={0}
                cursor={true}
                cursorColor="rgb(114 226 174)"
              />
            </span>
          </h3>
          <ul className="space-y-3 list-disc list-inside">
            <li className="relative my-list">
              <strong className="inline-block lg:min-w-[120px] min-w-[100px] font-medium">
                First Name
              </strong>
              : Sumon Chandra
            </li>
            <li className="relative my-list">
              <strong className="inline-block lg:min-w-[120px] min-w-[100px] font-medium">
                Last Name
              </strong>
              : Shil
            </li>
            <li className="relative my-list">
              <strong className="inline-block lg:min-w-[120px] min-w-[100px] font-medium">
                Age
              </strong>
              : 22 years
            </li>
            <li className="relative my-list">
              <strong className="inline-block lg:min-w-[120px] min-w-[100px] font-medium">
                Nationality
              </strong>
              : Bangladesh
            </li>
            <li className="relative my-list">
              <strong className="inline-block lg:min-w-[120px] min-w-[100px] font-medium">
                Language
              </strong>
              : English, Bengali
            </li>
            <li className="relative my-list">
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
