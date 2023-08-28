import { useRouter } from "next/router";
import { ReactNode } from "react";
import { GrContactInfo } from "react-icons/gr";
import { LuNewspaper } from "react-icons/lu";
import { BsMailbox } from "react-icons/bs";
import Navigation from "@components/Navigation";
import NavigationButton from "@components/NavigationButton";

export default function Projects() {
  const router = useRouter();

  const handleRoute = (link: string) => {
    setTimeout(() => {
      router.push(link);
    }, 300);
  };

  const PortfolioItem = ({
    children,
    link,
  }: {
    children: ReactNode;
    link: string;
  }) => {
    return (
      <a
        onClick={() => handleRoute(link)}
        className="lg:hover:scale-95 duration-200 hover:cursor-pointer lg:active:scale-90 lg:grayscale hover:grayscale-0"
      >
        {children}
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
      <div className="grid lg:grid-rows-2 lg:grid-cols-4 grid-flow-row mt-10 lg:mt-0">
        <PortfolioItem link="https://pong.aaronnn.com">
          <img src="pong.png" />
        </PortfolioItem>
        <PortfolioItem link="/Land">
          <img src="landscape.png" />
        </PortfolioItem>
        {/* <PortfolioItem>
          <img src="nwts.png" />
        </PortfolioItem>
        <PortfolioItem>
          <img src="nwts.png" />
        </PortfolioItem>
        <PortfolioItem>
          <img src="nwts.png" />
        </PortfolioItem>
        <PortfolioItem>
          <img src="nwts.png" />
        </PortfolioItem>
        <PortfolioItem>
          <img src="nwts.png" />
        </PortfolioItem>
        <PortfolioItem>
          <img src="nwts.png" />
        </PortfolioItem> */}
      </div>
    </div>
  );
}
