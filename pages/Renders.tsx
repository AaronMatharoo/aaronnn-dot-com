import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Renders() {
  return (
    <>
      <div className="h-screen bg-slate-200">
        {/* <div className="absolute bg-gradient-to-r from-transparent to-purple-400 w-full h-9"></div> */}
        <div className="absolute bg-pink-500 w-80 h-72 right-16 top-20 rounded-full mix-blend-multiply blur-2xl animate-blob"></div>
        <div className="absolute bg-yellow-500 w-72 h-96 right-56 top-52 rounded-full mix-blend-multiply blur-2xl animate-blob"></div>
        <div className="absolute bg-purple-500 w-80 h-72 left-10 bottom-10 rounded-full mix-blend-multiply blur-2xl animate-blob"></div>
        <div className="absolute bg-blue-500 w-72 h-96 left-56 bottom-40 rounded-full mix-blend-multiply blur-2xl animate-blob"></div>
        <div className="px-8 py-5 space-y-2 bg-gradient-to-l from-transparent to-white">
          <h1 className="font-semibold text-5xl text-center lg:text-left">Room Render</h1>
          <h1 className="font-light text-3xl text-center lg:text-left">Made with Blender by Aaron Matharoo</h1>
        </div>
        <div className="flex justify-center items-center">
          <div className="lg:w-[50%]">
            <Carousel
              autoPlay
              infiniteLoop
              showThumbs={false}
              swipeable
              dynamicHeight
            >
              <div>
                <img src="room1.png" alt="" />
              </div>
              <img src="room2.png" alt="" />
              <img src="room3.png" alt="" />
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}
