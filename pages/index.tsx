import SlidingBanner from "@components/SlidingBanner";
import Head from "next/head";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import { useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  const visibleStyles = `text-5xl text-center w-full ${isVisible ? "" : ""}`;

  const router = useRouter();

  const handleRoute = (link:string) => {
    setTimeout(() => {
      router.push(link);
    }, 300)
  }

  return (
    <>
      <Head>
        <link rel="icon" href="aa.png" />
      </Head>
      <div className="h-screen flex flex-col ">
        <div>
          <div className="absolute z-10 px-4 p-2 flex items-center border-y-[1.5px] border-x-2 border-t-2 h-12 border-black bg-white space-x-4">
            <img src="aa.png" className="h-7" />
            <h1 className="font-bold">AARON MATHAROO</h1>
          </div> 
          <SlidingBanner /> 
        </div> 
        {/* hover:bg-[rgb(161,89,255)] */}
        <div className="bg-black flex-1 grid grid-rows-6 grid-cols-6">
          <a className="bg-white flex items-center row-span-3 col-span-4 border-[1.5px] border-black hover:scale-95 duration-100 hover:border-2 hover:font-bold hover:cursor-pointer active:scale-90" onClick={() => handleRoute('/Projects')}>
              <h1 className="text-5xl text-center w-full">PROJECTS</h1>
          </a>
          <a className="bg-white flex items-center  row-span-3 col-span-2 border-[1.5px] border-black hover:scale-95 duration-100 hover:border-2 hover:font-bold hover:cursor-pointer active:scale-90" onClick={() => handleRoute('/About')}>
            <h1 className="text-5xl text-center w-full">ABOUT</h1>
          </a>
          <a className="bg-white flex items-center  row-span-3 col-span-2 border-[1.5px] border-black hover:scale-95 duration-100 hover:border-2 hover:font-bold hover:cursor-pointer active:scale-90" onClick={() => handleRoute('/Resume')}>
            <h1 className="text-5xl text-center w-full">RESUME</h1>
          </a>
          <a className="bg-white flex items-center row-span-3 col-span-4 border-[1.5px] border-black hover:scale-95 duration-100 hover:border-2 hover:font-bold hover:cursor-pointer active:scale-90" onClick={() => handleRoute('/Contact')}>
            <h1 className="text-5xl text-center w-full">CONTACT</h1>
          </a>
        </div>
      </div>
    </>
  );
}
