import Marquee from "react-fast-marquee";

const SlidingBanner = () => {
    const SlidingTexts = [
      "App Development",
        "Music",
        "Engineering",
        "Racing",
        "Programming",
        "Design",
        // "Hip-Hop",
        // "R&B",
        "Sim-Racing",
        "Cyber Security",
        "Gaming",
        "Software Engineering",
        "Fashion",
        "Automotive Engineering",
        "Charity",
      ];
    
      const Slider = () => {
        return (
          <>
            <div className="w-full py-2 h-12 border-t-[3px] border-b-[3px] border-black overflow-hidden relative bg-[#f0f0f5]">
              <Marquee>
                {SlidingTexts.map((text) => (
                  <div className=" flex items-center whitespace-nowrap flex-shrink-0">
                    <p className="text-lg font-light">{text}</p>
                    <img src="aa.png" className="mx-5 h-7" />
                  </div>
                ))}
              </Marquee>
            </div>
          </>
        );
      };

      return (
        <Slider />
      )
}

export default SlidingBanner