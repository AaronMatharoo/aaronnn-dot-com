import SlidingBanner from "@components/SlidingBanner";
import Head from "next/head";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import { useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  const router = useRouter();

  const handleRoute = (link: string) => {
    setTimeout(() => {
      router.push(link);
    }, 300);
  };

  return (
    <>
      <Head>
        <link rel="icon" href="aa-purple.png" />
      </Head>
      <div className="h-screen flex flex-col ">
        <div className="grid grid-cols-12">
          <div className="lg:col-span-2 col-span-6 z-10 px-4 p-2 flex items-center border-y-[3px] border-r-[3px] h-12 border-black bg-[#f0f0f5] space-x-6 lg:space-x-4 hover:text-[#5d00d7]">
            <img src="aa-purple.png" className="h-7 animate-bounce-its" />
            <h1 className="font-bold hidden lg:block">AARON MATHAROO</h1>
            <h1 className="font-bold lg:hidden">AARON M</h1>
          </div>
          <div className="lg:col-span-10 col-span-6">
            <SlidingBanner />
          </div>
        </div>
        <div className="bg-black flex-1 grid lg:grid-rows-6 lg:grid-cols-6 grid-rows-4 gap-1">
          <a
            className="bg-[#f0f0f5] flex items-center lg:row-span-3 border-black lg:hover:border-x-[14px] lg:hover:border-y-[10px] lg:col-span-4 duration-100 hover:font-bold hover:cursor-pointer lg:active:scale-95 hover:text-white hover:bg-[#5d00d7]"
            onClick={() => handleRoute("/Projects")}
          >
            <h1 className="text-5xl text-center w-full">PROJECTS</h1>
          </a>
          <a
            className="bg-[#f0f0f5] flex items-center lg:row-span-3 lg:col-span-2 border-black lg:hover:border-x-[14px] lg:hover:border-y-[10px] duration-100 hover:font-bold hover:cursor-pointer lg:active:scale-95 hover:text-white hover:bg-[#5d00d7]"
            onClick={() => handleRoute("/About")}
          >
            <h1 className="text-5xl text-center w-full">ABOUT</h1>
          </a>
          <a
            className="bg-[#f0f0f5] flex items-center lg:row-span-3 lg:col-span-2 border-black lg:hover:border-x-[14px] lg:hover:border-y-[10px] duration-100 hover:font-bold hover:cursor-pointer lg:active:scale-95  hover:text-white hover:bg-[#5d00d7]"
            onClick={() => handleRoute("/Resume")}
          >
            <h1 className="text-5xl text-center w-full">RESUME</h1>
          </a>
          <a
            className="bg-[#f0f0f5] flex items-center lg:row-span-3 lg:col-span-4 border-black lg:hover:border-x-[14px] lg:hover:border-y-[10px] duration-100 hover:font-bold hover:cursor-pointer lg:active:scale-95  hover:text-white hover:bg-[#5d00d7]"
            onClick={() => handleRoute("/Contact")}
          >
            <h1 className="text-5xl text-center w-full">CONTACT</h1>
          </a>
        </div>
      </div>
    </>
  );
}
