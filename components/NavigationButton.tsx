import useHandleRoute from "hooks/useHandleRoute";
import React, { ReactNode } from "react";

const NavigationButton = ({
  text,
  link,
  icon,
}: {
  text: string;
  link: string;
  icon: ReactNode;
}) => {
  const { handleRoute } = useHandleRoute();
  return (
    <a onClick={() => handleRoute(link)}>
      <div className="bg-[#f0f0f5] border-2 border-black lg:hover:border-x-[10px] duration-100 hover:font-bold hover:cursor-pointer active:scale-95 py-1 justify-center flex  hover:text-white hover:bg-[#5d00d7]">
        <h1 className="text-3xl text-center lg:flex hidden">{text}</h1>
        <div className="lg:hidden">{icon}</div>
      </div>
    </a>
  );
};

export default NavigationButton;
