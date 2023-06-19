import SectionHead from "./SectionHead";
import { FaExternalLinkAlt } from "react-icons/fa";
import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

interface Project {
  img: string;
  title: string;
  demoLink: string;
  githubLink: string;
}

const ProjectCard = ({ img, title, demoLink, githubLink }: Project) => {
  return (
    <div className="p-6 bg-[#1a2436e6] text-desc-color rounded-md hover:-translate-y-2 duration-500">
      <figure>
        <img src={img} className="w-full rounded-md" />
      </figure>
      <h3 className="lg:text-xl font-black mt-3">{title}</h3>
      <div className="flex justify-center gap-4 pt-6">
        <a
          href={demoLink}
          target="_blank"
          className="flex gap-1 items-center text-xs pb-2 border-b-2 border-main-color"
        >
          <span>Live Demo</span> <FaExternalLinkAlt />
        </a>
        <a
          href={githubLink}
          target="_blank"
          className="flex gap-1 items-center text-xs pb-2 border-b-2 border-main-color"
        >
          <span>Github Link</span> <FaExternalLinkAlt />
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section className="section">
      <SectionHead parallaxValue="projects" value="my projects" />
      <div className="lg:grid grid-cols-3 gap-10 lg:mt-20">
        <ProjectCard
          img={project1}
          demoLink="https://rhymove-2023.web.app/"
          githubLink="https://github.com/programming-hero-web-course1/b712-summer-camp-client-side-sumon-chandra"
          title="Rhymove Dance Studio & School"
        />
        <ProjectCard
          img={project2}
          demoLink="https://react-firebase-9fbd1.web.app/"
          githubLink="https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-client-side-sumon-chandra"
          title="Dishtour A Restaurant Website"
        />
        <ProjectCard
          img={project3}
          demoLink="https://toys-6546d.web.app/"
          githubLink="https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-client-side-sumon-chandra"
          title="Botboy A Superhero Toys marketplace"
        />
        <ProjectCard
          img={project4}
          demoLink="https://bistro-boss-restaurant-24b36.web.app/"
          githubLink="https://github.com/sumon-chandra/bistro-restaurant"
          title="Bostro Boss Restaurant"
        />
      </div>
    </section>
  );
};

export default Projects;
