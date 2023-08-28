import Marquee from "react-fast-marquee";

const SlidingBanner = () => {
    const SlidingTexts = [
        "Music",
        "App Development",
        "Racing",
        "Design",
        "Hip-Hop",
        "Engineering",
        "R&B",
        "Programming",
        "Cyber Security",
        "Fashion",
        "Software Engineering",
        "Automotive Engineering",
        "Charity",
      ];
    
      const Slider = () => {
        return (
          <>
            <div className="w-full py-2 h-12 border-t-2 border-b-[1.5px] border-black overflow-hidden relative">
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