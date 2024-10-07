import { useRouter } from "next/router";
import { GrContactInfo } from "react-icons/gr";
import { LuNewspaper } from "react-icons/lu";
import { BsMailbox } from "react-icons/bs";
import Navigation from "@components/Navigation";
import NavigationButton from "@components/NavigationButton";
import SkillPill from "@components/SkillPill";

export default function Projects() {
  const router = useRouter();

  const handleRoute = (link: string) => {
    setTimeout(() => {
      router.push(link);
    }, 300);
  };

  const PortfolioItem = ({
    img,
    link,
    description,
    skills,
  }: {
    img: string;
    link: string | null;
    description: string | null;
    skills: string[];
  }) => {
    return (
      <a
        onClick={link ? () => handleRoute(link) : () => null}
        className="lg:hover:scale-100 duration-150 hover:cursor-pointer 
        lg:hover:border-x-[10px] lg:hover:border-y-[8px] border-black
        lg:active:scale-90 hover:grayscale-0 lg:grayscale grayscale-0 bg-[#fffdfd] shadow-md font-light lg:hover:font-semibold"
      >
        <img src={img} className="" />
        {/* <div className="">{children}</div> */}
        <p className="text-left text-lg p-5 border-b-2">{description}</p>
        <div className="flex flex-wrap justify-center p-5">
          {skills?.map((skill) => (
            <SkillPill text={skill} />
          ))}
        </div>
      </a>
    );
  };

  return (
    <div className="bg-black">
      <Navigation
        route2={
          <NavigationButton
            text="ABOUT"
            link="/About"
            icon={<GrContactInfo size={30} />}
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
      <div className="grid lg:grid-rows-2 lg:grid-cols-4 grid-flow-row grid-cols-1 mt-10 lg:mt-0 gap-1 p-1 lg:p-0">
        <PortfolioItem
          img="appsec.png"
          link="https://github.com/AaronMatharoo/secure-event-management-system"
          description="In-depth Application Security & Security-By-Design demo"
          skills={[
            "React",
            "TypeScript",
            "Node.js",
            "Express.js",
            "JWTs",
            "PostgreSQL",
          ]}
        />
        <PortfolioItem
          img="shocker.png"
          link="/Shocker"
          description="Write up on Linux machine from HackTheBox: Shocker"
          skills={[
            "Nmap",
            "Gobuster",
            "Shellshock",
            "OOB Testing",
            "NetCat",
            "LinPEAS",
          ]}
        />
        <PortfolioItem
          img="soccer.png"
          link="/Soccer"
          description="Write up on Linux machine from HackTheBox: Soccer"
          skills={["Nmap", "Gobuster", "Reverse Shell", "SQL Injection", "SSH"]}
        />
        <PortfolioItem
          img="tangelo.png"
          link="https://techtangelo.com"
          description="Software agency website targeting small to medium sized businesses"
          skills={[
            "Next.js",
            "React",
            "TypeScript",
            "TailwindCSS",
            "EmailJS",
            "SMTP",
          ]}
        />
        <PortfolioItem
          img="networked.png"
          link="/Networked"
          description="Write up on Linux machine from HackTheBox: Networked"
          skills={["Nmap", "Gobuster", "Reverse Shell", "File Upload", "PHP"]}
        />
        <PortfolioItem
          img="ridecaller.png"
          link="/RideCaller"
          description="Full-stack cross platform app for arranged chauffeur services"
          skills={["React Native", "TypeScript", "Expo SDK", "PostgreSQL"]}
        />
        <PortfolioItem
          img="sense.png"
          link="/Sense"
          description="Write up on Linux machine from HackTheBox: Sense"
          skills={["Nmap", "Gobuster", "Command Injection", "Python"]}
        />
        <PortfolioItem
          img="expression.jpg"
          link="https://expressions.aaronnn.com"
          description="Facial expression detection using built-in webcam (Desktop only)"
          skills={["HTML", "JavaScript", "CSS", "tensorflow.js", "face-api.js"]}
        />
        <PortfolioItem
          img="landscape.png"
          link="/Land"
          description="Regenerative topographics where no two renders are alike"
          skills={["React", "TypeScript", "p5.js", "react-p5"]}
        />
        <PortfolioItem
          img="pong.png"
          link="https://pong.aaronnn.com"
          description="Pong with score counter, shifting colors, & increasing difficulty"
          skills={["HTML", "JavaScript", "CSS"]}
        />
        <PortfolioItem
          img="renders.png"
          link="/Renders"
          description="Gallery of room renders made with 3D computer graphics software"
          skills={["Blender", "Python", "react-responsive-carousel"]}
        />
        <PortfolioItem
          img="landing-page.png"
          link="https://blackstone.aaronnn.com"
          description="Dynamic & responsive landing page template for businesses"
          skills={["React", "TypeScript", "Next.js", "Tailwind CSS", "SCSS"]}
        />
        <PortfolioItem
          img="statimage.png"
          link="/StatisticalAnalysis"
          description="Statistical computation of Stephen Curry's performance (2020-2021)"
          skills={["R", "R Studio", "Quantitative Analysis"]}
        />
        {/* //NEW15LENSES */}
        <PortfolioItem
          img="comingsoon.png"
          link="/Projects"
          description={
            "Remote training platform for medical student labs... TBD"
          }
          skills={["TensorFlow", "React Native", "TBD"]}
        />
        <PortfolioItem
          img="comingsoon.png"
          link="/Projects"
          description={
            "Increase stakeholder engagement on development proposals"
          }
          skills={["React", "Next.js", "TypeScript", "PostgreSQL"]}
        />
        <PortfolioItem
          img="comingsoon.png"
          link="/Projects"
          description={
            "Marketplace for driving instructors & young drivers... TBD"
          }
          skills={["React Native", "TypeScript", "Expo", "SQL", "TBD"]}
        />
      </div>
    </div>
  );
}
