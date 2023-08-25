import SlidingBanner from "@components/SlidingBanner";
import Marquee from "react-fast-marquee";

export default function Home() {

  return (
    <div className="h-screen flex flex-col">
      <div>
        <SlidingBanner />
      </div>
      <div className="flex-1 bg-slate-400 grid grid-rows-6 grid-cols-6">
        <div className=" row-span-3 col-span-4 bg-red-500 border-r-2 border-b-2 border-black hover:scale-95 duration-100 hover:border-t-2 hover:border-l-2">
          About
        </div>
        <div className=" row-span-3 col-span-2 bg-purple-500 border-r-2 border-b-2 border-black hover:scale-95 duration-100 hover:border-t-2 hover:border-l-2">
          Aboutsdsdsd
        </div>
        <div className=" row-span-3 col-span-2 bg-yellow-500 border-r-2 border-b-2 border-black hover:scale-95 duration-100 hover:border-t-2 hover:border-l-2">
          dsadsd
        </div>
        <div className=" row-span-3 col-span-4 bg-green-500 border-r-2 border-b-2 border-black hover:scale-95 duration-100 hover:border-t-2 hover:border-l-2">
          eqweerrewrew
        </div>
      </div>
    </div>
  );
}
