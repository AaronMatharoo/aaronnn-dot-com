import Navigation from "@components/Navigation";
import NavigationButton from "@components/NavigationButton";
import TypeWriter from "@components/TypeWriter";
import { useState } from "react";
import { GrContactInfo, GrWorkshop } from "react-icons/gr";
import { LuNewspaper } from "react-icons/lu";
import { PiCopyDuotone } from "react-icons/pi";

export default function Contact() {
  const email = "aarons.developments@gmail.com";
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  const CopyButton = () => {
    return (
      <>
        <button
          className="w-min text-black border-dashed border-2 border-[#5d00d7] hover:text-[#5d00d7] focus:outline-none hover:scale-110 duration-200 active:scale-95"
          onClick={copyToClipboard}
        >
          <div className="p-2">
            <PiCopyDuotone size={30} />
          </div>
        </button>
      </>
    );
  };

  return (
    <div className="bg-[#f0f0f5] h-full lg:h-screen">
      <Navigation
        route2={
          <NavigationButton
            text="PROJECTS"
            link="/Projects"
            icon={<GrWorkshop size={30} />}
          />
        }
        route3={
          <NavigationButton
            text="ABOUT"
            link="/About"
            icon={<GrContactInfo size={30} />}
          />
        }
        route4={
          <NavigationButton
            text="RESUME"
            link="/Resume"
            icon={<LuNewspaper size={30} />}
          />
        }
      />
      <div className="p-10 space-y-10">
        {/* <div className="grid grid-cols-3"> */}
        <div className="space-y-10 h-min">
          <div className="hidden lg:block">
            <TypeWriter text="Feel Free To Contact Me!" />
          </div>
          <div className="block lg:hidden">
            <TypeWriter text="Contact Me!" />
          </div>
          <div className="lg:hidden flex justify-center">
            <img src="contact-02.png" className="h-[150px]" />
          </div>
          <h1 className="text-3xl">
            Don't be shy! Whether its work or leisure related, I am always
            looking forward to meeting new people and discussing different
            interests!
          </h1>
          <h1 className="text-3xl">Shoot me a message at:</h1>
        </div>

        <div className="grid lg:grid-cols-2 grid-flow-row lg:mx-36">
          <div className="flex items-center justify-center mb-16">
            <div className=" space-y-5">
              <h1 className="lg:text-3xl text-lg font-bold underline decoration-[#5d00d7] hover:decoration-black hover:text-[#5d00d7]">
                {email}
              </h1>
              <div className="space-y-5 hidden lg:block">

              <div className="flex justify-center">
                <CopyButton />
              </div>
              <h1
                className={`text-center font-semibold text-xl ${
                    isCopied ? "text-[#5d00d7]" : "text-black"
                }`}
                >
                {isCopied ? "Email Copied!" : "Copy Email"}
              </h1>
            </div>
                  </div>
          </div>
          <div className="h-min lg:flex justify-center hidden ">
            <img src="contact-02.png" className="h-[350px]" />
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
