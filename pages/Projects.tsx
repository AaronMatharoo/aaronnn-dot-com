import SlidingBanner from "@components/SlidingBanner";
import { useRouter } from "next/router";
import { ReactNode } from "react";

export default function Projects() {
  const router = useRouter();

  const handleRoute = (link: string) => {
    setTimeout(() => {
      router.push(link);
    }, 300);
  };

  const NavButton = ({ text, link }: { text: string; link: string }) => {
    return (
      <a onClick={() => handleRoute(link)}>
        <div className="bg-white border-2 border-black hover:scale-95 duration-100 hover:border-2 hover:font-bold hover:cursor-pointer active:scale-90 py-1">
          <h1 className="text-3xl text-center w-full">{text}</h1>
        </div>
      </a>
    );
  };

  const PortfolioItem = ({ children, link }: { children: ReactNode; link:string }) => {
    return (
    <a onClick={() => handleRoute(link)} className="hover:scale-95 duration-200 hover:cursor-pointer active:scale-90 grayscale hover:grayscale-0">
        {children}
    </a>
    )
    ;
  };

  return (
    <div className="bg-black">
      {/* <SlidingBanner /> */}
      <div className="grid grid-cols-3 bg-black">
        <NavButton text="HOME" link="/" />
        <NavButton text="RESUME" link="/Resume" />
        <NavButton text="CONTACT" link="/Contact" />
      </div>
      {/* project display */}
      <div className="grid grid-rows-2 grid-cols-4">
        <PortfolioItem link="https://pong.aaronnn.com">
          <img src="pong.png"  />
        </PortfolioItem>
        <PortfolioItem link="/Land">
          <img src="landscape.png" />
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
        </PortfolioItem>
        <PortfolioItem>
          <img src="nwts.png" />
        </PortfolioItem>
      </div>
    </div>
  );
}
