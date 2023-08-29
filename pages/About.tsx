import Navigation from "@components/Navigation";
import NavigationButton from "@components/NavigationButton";
import SlidingBanner from "@components/SlidingBanner";
import TypeWriter from "@components/TypeWriter";
import useHandleRoute from "hooks/useHandleRoute";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BsMailbox } from "react-icons/bs";
import { GrContactInfo, GrWorkshop } from "react-icons/gr";
import { LuNewspaper } from "react-icons/lu";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function About() {
  const SkillList = [
    "REACT",
    "TYPESCRIPT",
    "JAVASCRIPT",
    "HTML5",
    "CSS",
    "REDUX",
    "REACT CONTEXT",
    "POSTGRESQL",
    "NOSQL",
    "NODE.JS",
    "RESTFUL APIS",
    "GIT",
    "GITHUB",
    "JEST",
    "EXPO SDK",
    "REACT NATIVE",
  ];

  const SkillPill = ({ text }: { text: string }) => {
    return (
      <>
        <div className="bg-[#5d00d7] w-min h-min rounded-md px-2 text-white  whitespace-nowrap font-light mr-2 my-1">
          {text}
        </div>
      </>
    );
  };

  const { handleRoute } = useHandleRoute();

  return (
    <div className="bg-[#f0f0f5]">
      <div className="">
        <Navigation
          route2={
            <NavigationButton
              text="PROJECTS"
              link="/Projects"
              icon={<GrWorkshop size={30} />}
            />
          }
          route3={
            <NavigationButton
              text="RESUME"
              link="/Resume"
              icon={<LuNewspaper size={30} />}
            />
          }
          route4={
            <NavigationButton
              text="CONTACT"
              link="/Contact"
              icon={<BsMailbox size={30} />}
            />
          }
        />
      </div>
      <div className="grid lg:grid-cols-2 grid-flow-row lg:py-0 py-10">
        <div className="flex items-center p-10">
          {/* <h1 className="text-xl font-light">Hey there!</h1> */}
          <div className=" space-y-5">
            <div className="hidden lg:flex">
              <TypeWriter text="My name is Aaron!" />
            </div>
            <div className="lg:hidden">
              <TypeWriter text="Hi I'm Aaron" />
            </div>
            <h1 className="text-xl font-light text-[#5d00d7]">
              WEB APPLICATION DEVELOPER | SOFTWARE ENGINEER
            </h1>
          </div>
        </div>
        <div>
          <img src="geowaves.png" className="max-w-full max-h-full" alt="" />
        </div>
      </div>
      <div className="grid lg:grid-cols-2 grid-flow-row">
        <div className="p-10 pl-20 space-y-10 hidden lg:block ">
          <h1 className="font-semibold text-3xl">The Projects Page</h1>
          <button
            className="bg-[#f0f0f5] text-[#5d00d7] font-light border-[#5d00d7] border-2 py-1 px-2 rounded-md lg:text-3xl text-2xl hover:scale-110 duration-100 hover:font-semibold active:scale-95"
            onClick={() => handleRoute("/Projects")}
          >
            SEE MY WORK HERE
          </button>
        </div>
        <div className="py-10 space-y-5 px-10 lg:px-0">
          <h1 className="font-semibold text-3xl text-center lg:text-left">
            Technical Skills
          </h1>
          <div className="flex flex-wrap">
            {SkillList.map((skill) => (
              <SkillPill text={skill} />
            ))}
          </div>
        </div>
        <div className="p-10 space-y-10 lg:hidden ">
          <h1 className="font-semibold text-3xl text-center">
            The Projects Page
          </h1>
          <div className="flex justify-center">
            <button
              className="bg-[#f0f0f5] text-[#5d00d7] font-light border-[#5d00d7] border-2 py-1 px-2 rounded-md lg:text-3xl text-2xl hover:scale-110 duration-100 hover:font-semibold active:scale-95"
              onClick={() => handleRoute("/Projects")}
            >
              SEE MY WORK HERE
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center space-x-5 py-10">
        <div className="animate-arrow-ping">
          <MdOutlineKeyboardArrowDown size={50} />
        </div>
        <h1 className="text-center text-5xl font-semibold hidden lg:block">
          More about me
        </h1>
        <h1 className="text-center text-5xl font-semibold lg:hidden pb-10 lg:pb-0">
          About me
        </h1>
        <div className="animate-arrow-ping">
          <MdOutlineKeyboardArrowDown size={50} />
        </div>
      </div>
      <div className="grid lg:grid-cols-2 grid-flow-row">
        <div className="lg:hidden justify-center h-min flex">
          <img src="IDCard-02.png" alt="" className="lg:h-[250px] h-[100px]" />
        </div>
        <div className="p-10 space-y-5">
          <h1 className="font-semibold text-3xl hidden lg:block">
            Who Am I? Where am I?
          </h1>
          <h1 className="font-semibold text-3xl lg:hidden text-center">
            Who/Where am I?
          </h1>
          <div className="space-y-5">
            <h1 className="font-light text-xl">
              I'm Aaron Matharoo! Technology enthusiast, problem solver, sim
              racer, and global citizen hailing from the city of London,
              England.
            </h1>
            {/* <h1>Where am i now? Great question.</h1> */}
            <h1 className="font-light text-xl">
              Although I come from overseas, I've spent most of my life right
              here in the GTA (Greater Toronto Area), which is currently where I
              am right now!
            </h1>
          </div>
        </div>
        <div className="lg:flex justify-center h-min hidden">
          <img src="IDCard-02.png" alt="" className="h-[250px]" />
        </div>
        <div className="flex justify-center h-min">
          <img
            src="Career-02.png"
            alt=""
            className="lg:h-[425px] h-[150px] mt-5"
          />
        </div>
        <div className="p-10 space-y-5">
          <h1 className="font-semibold text-3xl text-center lg:text-left">
            Rich Experiences
          </h1>
          <div className="space-y-5">
            <h1 className="font-light text-xl">
              All of my studying was completed right here in Southern Ontario. I
              come equipped with strong foundations in information technology,
              computer science, and software development. However, it was the
              real-world experiences that truly made my experiences rich!
            </h1>
            {/* <h1>Where am i now? Great question.</h1> */}
            <h1 className="font-light text-xl">
              My experiences range from working on team projects at civil
              engineering firms, leading magazine production teams, building my
              own cross-platform applications, all the way to working at world
              class corporate offices!
            </h1>
            <h1 className="font-light text-xl">
              My passion for engineering and technology led me to contribute to
              multiple firms, and my creative side thrived through various
              design projects.
            </h1>
          </div>
          <div className="flex justify-center py-10">
            <button
              className="bg-[#f0f0f5] text-[#5d00d7] font-light border-[#5d00d7] border-2 py-1 px-2 rounded-md lg:text-3xl text-2xl hover:scale-110 duration-100 hover:font-semibold active:scale-95"
              onClick={() => handleRoute("/Resume")}
            >
              SEE MY EXPERIENCE
            </button>
          </div>
        </div>
        <div className="p-10 space-y-5">
          <div className="flex justify-center h-min lg:hidden">
            <img
              src="tech-02.png"
              alt=""
              className="lg:h-[350px] h-[150px] lg:mt-16"
            />
          </div>
          <h1 className="font-semibold text-3xl text-center lg:text-left">
            My Mission, Passions, & Beyond
          </h1>
          <div className="space-y-5">
            <h1 className="font-light text-xl">
              My mission is to make a tangible difference in the tech landscape.
              I'm eager to collaborate with a dynamic team that shares my
              passion for pushing boundaries and embracing new challenges.
              Technology isn't just a career for me; it's a way of life. I'm a
              firm believer that innovation has the power to transform lives.
            </h1>
            <h1 className="font-light text-xl">
              Coding is my canvas, and I love turning complex problems into
              elegant solutions! My expertise shines when working with React and
              React Native, weaving intricate web and app experiences. I've also
              mastered the art of using both vanilla CSS and CSS libraries to
              craft stunning visuals while keeping user experience at the
              forefront. Back-end development is something I've become
              especially good at as well, managing user security and optimizing
              data retrieval as needed.
            </h1>
            <h1 className="font-light text-xl">
              Outside of the tech realm though, you'll find me at the gym or
              indulging my need for speed through sim racing and topping global
              leaderboards with the fastest lap times. As for what's next in my
              professional career, my journey is an ongoing adventure. Impactful
              solutions for web and application development is at the forefront
              of my sights. Beyond that, exploring the realm of cybersecurity
              and information technology to see how we can produce more robust,
              long term solutions is what I will be focusing on.
            </h1>
          </div>
        </div>
        <div className="lg:flex justify-center h-min hidden ">
          <img src="tech-02.png" alt="" className="h-[350px] mt-16" />
        </div>
        <div className="flex justify-center h-min">
          <img
            src="connect-02.png"
            alt=""
            className="lg:h-[425px] h-[150px] mt-5"
          />
        </div>
        <div className="p-10 space-y-5">
          <h1 className="font-semibold text-3xl text-center lg:text-left">
            Let's Connect!
          </h1>
          <div className="space-y-5">
            <h1 className="font-light text-xl">
              Whether it's a coding conundrum, a design challenge, or a
              conversation about the latest tech trends, I'm always up for a
              meaningful exchange. Join me as I continue to learn, innovate, and
              make my mark on the ever-evolving tech landscape. Looking forward
              to connecting with you!
            </h1>
            <div className="flex justify-center py-10">
              <button
                className="bg-[#f0f0f5] text-[#5d00d7] font-light border-[#5d00d7] border-2 py-1 px-2 rounded-md lg:text-3xl text-2xl hover:scale-110 duration-100 hover:font-semibold active:scale-95"
                onClick={() => handleRoute("/Contact")}
              >
                CONNECT WITH ME
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
