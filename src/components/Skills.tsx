import SectionHead from "./SectionHead";
import js from "../assets/icons/js.png";
import ts from "../assets/icons/typescript.png";
import react from "../assets/icons/react.png";
import redux from "../assets/icons/redux.png";
import figma from "../assets/icons/figma.png";
import mongodb from "../assets/icons/mongodb.png";
import node from "../assets/icons/node-js.png";
import firebase from "../assets/icons/firebase.png";
import express from "../assets/icons/express.png";
import Tilt from "react-parallax-tilt";

interface SkillTypes {
  skill: string;
  img: string;
  index: number;
}

const SkillCard = ({ skill, img, index }: SkillTypes) => {
  return (
    <div data-aos="zoom-out-dow" data-aos-duration="2000">
      <Tilt
        className={`card bg-[#162033] rounded-3xl shadow-2xl mx-auto w-40 h-40 select-none ${
          index % 2 === 0 ? "lg:mt-0 mt-5" : "lg:mt-28 mt-5"
        }`}
        perspective={500}
        scale={1.1}
      >
        <div>
          <img
            src={img}
            className="object-contain mx-auto p-4 h-32 duration-500 saturate-0 hover:saturate-100"
          />
          <h3 className="text-desc-color lg:text-lg font-black text-center">
            {skill}
          </h3>
        </div>
      </Tilt>
    </div>
  );
};

const Skills = () => {
  return (
    <section className="section" id="skills">
      <SectionHead parallaxValue="skills" value="my skills" />

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-7 lg:py-20">
        <SkillCard index={1} skill="TypeScript" img={ts} />
        <SkillCard index={2} skill="JavaScript" img={js} />
        <SkillCard index={3} skill="ReactJS" img={react} />
        <SkillCard index={4} skill="ReduxJS" img={redux} />
        <SkillCard index={5} skill="NodeJS" img={node} />
        <SkillCard index={6} skill="ExpressJS" img={express} />
        <SkillCard index={7} skill="MongoDB" img={mongodb} />
        <SkillCard index={8} skill="Firebase" img={firebase} />
        <SkillCard index={9} skill="Figma" img={figma} />
      </div>
    </section>
  );
};

export default Skills;
