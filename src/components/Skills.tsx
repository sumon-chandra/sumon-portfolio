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

interface SkillTypes {
  skill: string;
  img: string;
}

const SkillCard = ({ skill, img }: SkillTypes) => {
  return (
    <div className="bg-[#162033] p-6 flex flex-col items-center gap-3 border-b-2 border-main-color shadow-sm shadow-main-color duration-500 hover:-translate-y-2">
      <img
        src={img}
        className="lg:w-16 w-10 duration-500 saturate-0 hover:saturate-100"
      />
      <h3 className="text-desc-color lg:text-2xl font-black">{skill}</h3>
    </div>
  );
};

const Skills = () => {
  return (
    <section className="section" id="skills">
      <SectionHead parallaxValue="skills" value="my skills" />

      <div className=" grid grid-cols-2 lg:grid-cols-3 gap-7 lg:pt-20">
        <SkillCard skill="TypeScript" img={ts} />
        <SkillCard skill="JavaScript" img={js} />
        <SkillCard skill="ReactJS" img={react} />
        <SkillCard skill="ReduxJS" img={redux} />
        <SkillCard skill="NodeJS" img={node} />
        <SkillCard skill="ExpressJS" img={express} />
        <SkillCard skill="MongoDB" img={mongodb} />
        <SkillCard skill="Firebase" img={firebase} />
        <SkillCard skill="Figma" img={figma} />
      </div>
    </section>
  );
};

export default Skills;
