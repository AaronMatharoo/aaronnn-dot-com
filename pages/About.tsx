import Navigation from "@components/Navigation";
import NavigationButton from "@components/NavigationButton";
import SkillPill from "@components/SkillPill";
import TypeWriter from "@components/TypeWriter";
import useHandleRoute from "hooks/useHandleRoute";
import { BsMailbox } from "react-icons/bs";
import { GrWorkshop } from "react-icons/gr";
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
        <div className="py-10 space-y-5 px-10 lg:px-10">
          <h1 className="font-semibold text-3xl text-center lg:text-left">
            Technical Skills
          </h1>
          <div className="flex flex-wrap">
            {SkillList.map((skill) => (
              <SkillPill text={skill} />
            ))}
          </div>
        </div>
        <div className="p-10 lg:pl-0 pl-20 space-y-10 hidden lg:block ">
          <h1 className="font-semibold text-3xl">The Projects Page</h1>
          <button
            className="bg-[#f0f0f5] text-[#5d00d7] font-light border-[#5d00d7] border-2 py-1 px-2 rounded-md lg:text-3xl text-2xl hover:scale-110 duration-100 hover:font-semibold active:scale-95"
            onClick={() => handleRoute("/Projects")}
          >
            SEE MY WORK HERE
          </button>
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
        <div className="p-10 pb-20 space-y-5">
          <h1 className="font-semibold text-3xl hidden lg:block">
            Who Am I? Where am I?
          </h1>
          <h1 className="font-semibold text-3xl lg:hidden text-center">
            Who/Where am I?
          </h1>
          <div className="space-y-5">
            <h1 className="font-light text-xl">
              I'm
              <span className="text-[#5d00d7] font-semibold">
                {" "}
                Aaron Matharoo
              </span>
              ! Technology enthusiast,{" "}
              <span className="underline decoration-[#5d00d7] font-semibold">
                problem solver
              </span>
              , sim racer, and global citizen hailing from the city of London,
              England.
            </h1>
            <h1 className="font-light text-xl">
              Although I come from overseas,
              <span className="font-semibold">
                {" "}
                I've spent most of my life in the GTA{" "}
              </span>
              (Greater Toronto Area), but now <span className="text-[#5d00d7] font-semibold">I am all over North America</span>, working and living in both Canada & the United States!
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
            className="lg:h-[405px] h-[150px] mt-5"
          />
        </div>
        <div className="p-10 space-y-5">
          <h1 className="font-semibold text-3xl text-center lg:text-left">
            Rich Experiences
          </h1>
          <div className="space-y-5">
            <h1 className="font-light text-xl">
              All of my studying was completed in Southern Ontario, Canada. I
              come equipped with strong foundations in information technology,
              <span className="font-semibold text-[#5d00d7]">
                {" "}
                computer science{" "}
              </span>
              , and{" "}
              <span className="underline decoration-[#5d00d7] font-semibold">
                software development
              </span>
              . However, it was the real-world experiences that truly made my
              experiences rich!
            </h1>
            {/* <h1>Where am i now? Great question.</h1> */}
            <h1 className="font-light text-xl">
              My experiences range from working on team projects at
              <span className="font-semibold"> engineering firms</span>, leading
              magazine production teams, building my own
              <span className="font-semibold text-[#5d00d7]">
                {" "}
                cross-platform applications
              </span>
              , all the way to working at{" "}
              <span className="underline decoration-[#5d00d7] font-semibold">
                world class corporate offices
              </span>
              !
            </h1>
            <h1 className="font-light text-xl">
              My passion for engineering and technology led me to contribute to
              multiple firms, and my creative side thrived through various team
              projects.
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
        <div className="px-10 pb-20 space-y-5">
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
              My mission is to make a tangible difference in the tech landscape
              by collaborating with teams that push boundaries and embrace new
              challenges. Technology isn't just a career for me;
              <span className="font-semibold"> it's a way of life</span>, and
              innovation has the power to transform lives.
            </h1>
            <h1 className="font-light text-xl">
              I enjoy turning complex problems into elegant solutions,
              <span className="text-[#5d00d7] font-semibold">
                {" "}
                especially using React
              </span>
              . I've mastered the art of using CSS to{" "}
              <span className="underline decoration-[#5d00d7] font-semibold">
                craft stunning visuals
              </span>
              {"  "}
              while keeping user experience at the forefront. Back-end
              development is something I've become especially good at as well,
              managing user security and optimizing data retrieval as needed.
            </h1>
            <h1 className="font-light text-xl">
              Outside of the tech realm, you'll find me at the gym, indulging my
              need for speed through sim racing, or listening to good music. As
              for what's next in my professional career,{" "}
              <span className="underline decoration-[#5d00d7] font-semibold">
                impactful solutions for web and application development
              </span>{" "}
              is at the forefront of my sights. Beyond that, exploring the realm
              of{" "}
              <span className="text-[#5d00d7] font-semibold">
                cybersecurity and information technology
              </span>{" "}
              to see how we can produce more robust, long term solutions is what
              I will be focusing on.
            </h1>
          </div>
        </div>
        <div className="lg:flex justify-center h-min hidden ">
          <img src="tech-02.png" alt="" className="h-[350px] mt-32" />
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
              conversation about the latest tech trends,{" "}
              <span className="font-semibold underline decoration-[#5d00d7]">
                I'm always up for a meaningful exchange
              </span>
              . Join me as I continue to learn, innovate, and make my mark on
              the ever-evolving tech landscape.{" "}
              <span className="font-semibold text-[#5d00d7]">
                Looking forward to connecting with you!
              </span>
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
        <div className="hover:text-[#5d00d7] underline py-5 mt-10 lg:flex justify-center text-center bg-[#ffffff] lg:col-span-2 col-span-1 px-5 lg:px-0">
          <h1>
            Details of this
            site can be found in the public repository on my GitHub
            @AaronMatharoo (aaronmatharoo)
          </h1>
        </div>
      </div>
    </div>
  );
}
