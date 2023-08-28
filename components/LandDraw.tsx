import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import p5Types from "p5";
import { BarLoader, PropagateLoader } from "react-spinners";
//@ts-ignore

const Sketch = dynamic(() => import("react-p5").then((mod) => mod.default), {
  ssr: false,
  loading: () => <PropagateLoader color="#8f00ff" />,
});

interface ComponentProps {}

export const LandDraw: React.FC<ComponentProps> = (props: ComponentProps) => {
  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(window.innerWidth, window.innerHeight).parent(
      canvasParentRef
    );
    p5.noLoop();
    p5.strokeWeight(2);
    p5.background("#e0e0e0");
    p5.colorMode(p5.HSB);
  };

  const draw = (p5: p5Types) => {
    p5.noStroke();
    //@ts-ignore

    repeat(180, 900, 1, 200, 500, 1, gradient_land(p5));
  };

  const gradient_land = (p5: p5Types) => {
    return (x: number, y: number) => {
      var x2 = x + y / 2;
      var h: number = 200 * p5.noise(x / 200, y / 200);
      h += 30 * p5.noise(x / 30, y / 20);
      var y2 = y - h + 50;

      var hue = (h - 180 + 360) % 360;
      var brightness = h * 0.89;

      p5.fill(hue, 90, brightness, 0.3);
      p5.circle(x2, y2, 2);
    };
  };

  function repeat(
    x: number,
    y: number,
    z: number,
    a: number,
    b: number,
    c: number,
    d: number
  ) {
    if (arguments.length == 2) {
      for (var i = 0; i < arguments[0]; i += 1) {
        arguments[1]();
      }
    } else if (arguments.length == 4) {
      //@ts-ignore
      for (var i = arguments[0]; i <= arguments[1]; i += arguments[2]) {
        arguments[3](i);
      }
    } else if (arguments.length == 7) {
      //@ts-ignore
      for (var i = arguments[0]; i <= arguments[1]; i += arguments[2]) {
        for (var j = arguments[3]; j <= arguments[4]; j += arguments[5]) {
          arguments[6](i, j);
        }
      }
    }
  }

  const router = useRouter();

  return (
    <div className="bg-[#e0e0e0] relative flex justify-center items-center h-screen">
      <Sketch setup={setup} draw={draw} />
      <button className="absolute bottom-28" onClick={() => router.reload()}>
        <div className="bg-gradient-to-br from-purple-500 to-pink-300 hover:bg-pink-300 transition duration-200 border-black border-2 px-4 py-2 rounded-lg active:scale-110">
          <h1 className="hover:font-bold duration-100 text-xl">
            Click to regenerate
          </h1>
        </div>
      </button>
    </div>
  );
};
