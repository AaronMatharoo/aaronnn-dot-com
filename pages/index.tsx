import Marquee from "react-fast-marquee";

export default function Home() {
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

  const SlidingBanner = () => {
    return (
      <>
        <div className="w-full h-12 border-2 border-black overflow-hidden relative">
          <Marquee>
            {SlidingTexts.map((text) => (
              <div className="mt-2 flex items-center whitespace-nowrap flex-shrink-0">
                <p className="text-lg">{text}</p>
                <img src="star.png" className="mx-5 h-5" />
              </div>
            ))}
          </Marquee>
        </div>
      </>
    );
  };

  return (
    <div>
      <SlidingBanner />
    </div>
  );
}
