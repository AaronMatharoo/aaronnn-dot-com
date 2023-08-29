import Navigation from "@components/Navigation";
import NavigationButton from "@components/NavigationButton";
import SlidingBanner from "@components/SlidingBanner";
import useHandleRoute from "hooks/useHandleRoute";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BsMailbox } from "react-icons/bs";
import { GrContactInfo, GrWorkshop } from "react-icons/gr";
import { LuNewspaper } from "react-icons/lu";

export default function About() {
  const Typewriter = ({ text }: { text: string }) => {
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
      const typingSpeed = isDeleting ? 50 : 150;
      const pauseDuration = 4000;

      const timer = setTimeout(() => {
        if (!isDeleting && !isPaused) {
          if (currentIndex < text.length) {
            setDisplayText((prevText) => prevText + text[currentIndex]);
            setCurrentIndex((prevIndex) => prevIndex + 1);
          } else {
            setIsDeleting(true);
            setIsPaused(true);
            setTimeout(() => {
              setIsPaused(false);
            }, pauseDuration);
          }
        } else if (isDeleting && !isPaused) {
          if (displayText.length > 0) {
            setDisplayText((prevText) => prevText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setIsPaused(true);
            setTimeout(() => {
              setIsPaused(false);
              setCurrentIndex(0);
              setIsDeleting(false);
            }, pauseDuration);
          }
        }
      }, typingSpeed);

      return () => clearTimeout(timer);
    }, [displayText, currentIndex, text, isDeleting, isPaused]);

    return (
      <div className="text-5xl font-bold">
        {displayText}
        <span
          style={{
            animation: "blink 0.7s infinite",
            opacity: currentIndex < text.length && !isDeleting ? 1 : 0,
          }}
          className="ml-1"
        >
          |
        </span>
        <style>
          {`
          @keyframes blink {
            0%, 100% {
              opacity: 0;
            }
            50% {
              opacity: 1;
            }
          }
        `}
        </style>
      </div>
    );
  };

  const SkillList = [
    "REACT",
    "TYPESCRIPT",
    "JAVASCRIPT",
    "HTML5",
    "CSS",
    "REDUX",
    "CONTEXT",
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

  const {handleRoute} = useHandleRoute();

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

      <div className="grid grid-cols-2">
        <div className="flex items-center p-10">
          {/* <h1 className="text-xl font-light">Hey there!</h1> */}
          <div className=" space-y-5">
            <Typewriter text="My name is Aaron!" />
            <h1 className="text-xl font-light text-[#5d00d7]">
              WEB APPLICATION DEVELOPER | SOFTWARE ENGINEER
            </h1>
          </div>
        </div>
        <div>
          <img src="geowaves.png" className="max-w-full max-h-full" alt="" />
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="p-10 space-y-5">
          <h1 className="font-semibold text-3xl">Technical Skills</h1>
          <div className="flex flex-wrap">
            {SkillList.map((skill) => (
              <SkillPill text={skill} />
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center ">
            <button className="bg-[#f0f0f5] text-[#5d00d7] font-light border-[#5d00d7] border-2 py-1 px-2 rounded-md text-3xl hover:scale-110 duration-100 hover:font-semibold active:scale-95"
            onClick={() => handleRoute('/Projects')}
            >
              SEE MY WORK HERE
            </button>
        </div>
      </div>

      {/* <div className="grid grid-cols-2">
        <div className="p-10 space-y-5  bg-blue-500">
          <h1 className="font-semibold text-3xl">More About Me</h1>
        </div>
        <div className="flex justify-center items-center bg-pink-500">
            <button className="bg-white text-[#5d00d7] font-light border-[#5d00d7] border-2 py-1 px-2 rounded-md text-3xl hover:scale-110 duration-100">
              SEE MY WORK
            </button>
        </div>
      </div> */}

      {/* <div className="grid">
        
        <div className="grid grid-cols-2 h-min">
          
          <div className="p-10 space-y-5 bg-slate-500">
            <Typewriter text="Welcome! My name is Aaron!" />
            <h1>Who am i? Good question.</h1>
            <h1>
              I'm Aaron Matharoo: Tech enthusiast, problem solver, sim racer,
              and global citizen hailing from the city of London, England.
            </h1>
            <h1>Where am i now? Great question.</h1>
            <h1>
              Although I come from overseas, I've spent most of my life right
              here in the GTA (Greater Toronto Area), which is currently where I
              am right now!
            </h1>
          </div>
          
          <div className="p-10 space-y-5 bg-blue-500">
            <Typewriter text="From London to Toronto" />
            <h1>
              My journey began when I made the transatlantic move to Toronto at
              just the age of 6. Growing up in this diverse and dynamic city has
              given me a unique perspective that's shaped my passion for
              embracing new challenges and learning from different cultures.{" "}
            </h1>
          </div>

        </div>
        
        <div className="grid grid-cols-3">
          
          <div className="p-10 space-y-5 bg-pink-500">
            <Typewriter text="Rich Experiences" />
            <h1>
              I completed all of my studying right here in Southern Ontario. My
              academic journey equipped me with a strong foundation in
              information technology, computer science, and software
              development. However, it was the real-world experiences that truly
              made my experiences rich. I've worn numerous hats, from being an
              executive supervisor at large grocery chains all the way to team
              building at civil engineering firms. I even have experience at
              world class corporate offices such as Bell Canada, where I worked
              as an IT and Administrative technician. My passion for engineering
              and technology led me to contribute to multiple firms, and my
              creative side thrived through design projects.{" "}
            </h1>
          </div>
          
          <div className="p-10 space-y-5 bg-orange-500">
            <Typewriter text="The Mission" />
            <h1>
              Coding is my canvas, and I love turning complex problems into
              elegant solutions. My expertise shines when working with React and
              React Native, weaving intricate web and app experiences. I've also
              mastered the art of using CSS libraries to craft stunning visuals
              while keeping user experience at the forefront. Embracing the Tech
              World Tech isn't just a career for me; it's a way of life. I'm a
              firm believer that innovation has the power to transform lives.
              Outside of the tech realm, you'll find me at the gym or indulging
              my need for speed through sim racing and racing games. Aiming for
              Impact My mission is to make a tangible difference in the tech
              landscape. I'm eager to collaborate with a dynamic team that
              shares my passion for pushing boundaries and embracing new
              challenges. Throughout my journey, I've always been a dependable
              team player who's earned positive feedback across diverse domains.
              Next Steps My journey is an ongoing adventure, and my next steps
              involve harnessing my web and app development skills to create
              impactful solutions. Cybersecurity is a realm I'm excited to
              explore, as safeguarding digital landscapes is crucial in our
              ever-evolving world.
            </h1>
          </div>

          <div className="p-10 space-y-5 bg-green-500">
            <Typewriter text="Let's Connect!" />
            <h1>
              Let's Connect Whether it's a coding conundrum, a design challenge,
              or a conversation about the latest tech trends, I'm always up for
              a meaningful exchange. Join me as I continue to learn, innovate,
              and make my mark on the ever-evolving tech landscape. Looking
              forward to connecting with you!
            </h1>{" "}
          </div>

        </div>
      </div> */}
    </div>
  );
}
