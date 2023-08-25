import SlidingBanner from "@components/SlidingBanner";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div>
        <SlidingBanner />
      </div>
      <div className="bg-black flex-1 grid grid-rows-6 grid-cols-6">
        <div className="bg-white flex items-center row-span-3 col-span-4 border-[1.5px] border-black hover:scale-95 duration-100 hover:border-2">
          <h1 className="text-5xl text-center w-full">About</h1>
        </div>
        <div className="bg-white flex items-center  row-span-3 col-span-2 border-[1.5px] border-black hover:scale-95 duration-100 hover:border-2">
          <h1 className="text-5xl text-center w-full">Resume</h1>
        </div>
        <div className="bg-white flex items-center  row-span-3 col-span-2 border-[1.5px] border-black hover:scale-95 duration-100 hover:border-2">
          <h1 className="text-5xl text-center w-full">Contact</h1>
        </div>
        <div className="bg-white flex items-center row-span-3 col-span-4 border-[1.5px] border-black hover:scale-95 duration-100 hover:border-2">
          <h1 className="text-5xl text-center w-full">Projects</h1>
        </div>
      </div>
    </div>
  );
}
