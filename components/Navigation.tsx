import useHandleRoute from "hooks/useHandleRoute";
import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsMailbox } from "react-icons/bs";
import { GrContactInfo, GrWorkshop } from "react-icons/gr";
import { LuNewspaper } from "react-icons/lu";

const Navigation = ({
  route2,
  route3,
  route4,
}: {
  route2: ReactNode;
  route3: ReactNode;
  route4: ReactNode;
}) => {
  const { handleRoute } = useHandleRoute();

  const NavButton = ({
    text,
    link,
    icon,
  }: {
    text: string | ReactNode;
    link: string;
    icon: ReactNode;
  }) => {
    const router = useRouter();

  const isActive = router.pathname === link;
    return (
      <a onClick={() => handleRoute(link)}>
        <div className={`hover:text-white hover:bg-[#5d00d7] ${isActive ? `text-white font-semibold bg-[#5d00d7] lg:border-x-[10px]` : `bg-[#f0f0f5]`} border-2 border-black lg:hover:border-x-[10px] duration-100 hover:border-2 hover:font-bold hover:cursor-pointer active:scale-95 py-1 justify-center flex`}>
          <h1 className="text-3xl text-center lg:flex hidden">{text}</h1>
          <div className="lg:hidden">{icon}</div>
        </div>
      </a>
    );
  };

  const NavGrid = ({
    route2,
    route3,
    route4,
  }: {
    route2: ReactNode;
    route3: ReactNode;
    route4: ReactNode;
  }) => {
    return (
      <>
        <div className="grid grid-cols-10 bg-black">
          <div className="col-span-2">
            <NavButton
              text={"HOME"}
              link="/"
              icon={<AiOutlineHome size={30} />}
            />
          </div>
          <div className="col-span-2">
            <NavButton
              text="PROJECTS"
              link="/Projects"
              icon={<GrWorkshop size={30} />}
            />
          </div>
          <div className="col-span-2">
            <NavButton
              text="ABOUT"
              link="/About"
              icon={<GrContactInfo size={30} />}
            />
          </div>
          <div className="col-span-2">
            <NavButton
              text="RESUME"
              link="/Resume"
              icon={<LuNewspaper size={30} />}
            />
          </div>
          <div className="col-span-2">
            <NavButton
              text="CONTACT"
              link="/Contact"
              icon={<BsMailbox size={30} />}
            />
          </div>
        </div>
      </>
    );
  };

  const ScrollToHideNavigation = ({
    route2,
    route3,
    route4,
  }: {
    route2: ReactNode;
    route3: ReactNode;
    route4: ReactNode;
  }) => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingUp = prevScrollPos > currentScrollPos;

      setPrevScrollPos(currentScrollPos);
      setVisible(isScrollingUp || currentScrollPos < 100);
    };

    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollPos]);

    return (
      <div
        className={`fixed top-0 w-full transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <NavGrid route2={route2} route3={route3} route4={route4} />
      </div>
    );
  };
  return (
    <>
      <div className="lg:hidden">
        <ScrollToHideNavigation
          route2={route2}
          route3={route3}
          route4={route4}
        />
      </div>
      <div className="hidden lg:block">
        <NavGrid route2={route2} route3={route3} route4={route4} />
      </div>
    </>
  );
};

export default Navigation;
