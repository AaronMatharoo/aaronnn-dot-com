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
      <div className="bg-white border-2 border-black hover:scale-95 duration-100 hover:border-2 hover:font-bold hover:cursor-pointer active:scale-90 py-1 justify-center flex">
        <h1 className="text-3xl text-center lg:flex hidden">{text}</h1>
        <div className="lg:hidden">{icon}</div>
      </div>
    </a>
  );
};

export default NavigationButton;
