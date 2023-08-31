import { ReactNode } from "react";

export default function RideCaller() {
  const PreviewWrapper = ({ children }: { children: ReactNode }) => {
    return (
      <>
        <div className="relative overflow-hidden rounded-xl w-[250px] h-[450px]">
          {children}
        </div>
      </>
    );
  };

  const AppPreviewDisplay = ({
    img1,
    img2,
    img3,
    img4,
    text,
  }: {
    img1: string;
    img2: string;
    img3: string;
    img4: string;
    text: string;
  }) => {
    const ImgDisplay = ({ src }: { src: string }) => {
      return (
        <>
          <PreviewWrapper>
            <img src={src} className="object-cover w-full h-full" />
          </PreviewWrapper>
        </>
      );
    };
    return (
      <>
        <div className="grid grid-flow-row justify-center space-y-3">
          <h1 className="font-semibold text-neutral-200 text-3xl">{text}</h1>
          <div className="grid grid-cols-4 gap-8">
            <ImgDisplay src={img1} />
            <ImgDisplay src={img2} />
            <ImgDisplay src={img3} />
            <ImgDisplay src={img4} />
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="grid grid-flow-row justify-center space-y-16 py-20 bg-[#2e2f31]">
      <div className="grid grid-cols-4">
        <div></div>
        <div className="col-span-1">
          <div className="bg-black drop-shadow-[5px_5px_rgba(255,255,255,1)] shadow-white rounded-[45px] h-72 w-72">
            <img src="splash-04.png" alt="" className="h-72" />
          </div>
        </div>
        <div className="col-span-2 space-y-5">
          <h1 className="text-5xl font-bold text-neutral-200">RideCaller</h1>
          <h1 className="text-2xl font-light text-neutral-200">
            Call A Ride With RideCaller
          </h1>
          <div className="grid grid-flow-row space-y-5">
            <button>
              <div className="relative flex justify-center items-center bg-slate-200 rounded-xl w-[225px] h-[75px]">
                <h1 className="font-semibold">Coming soon!</h1>
                <div className="absolute hover:hidden">
                  <img src="downloadios.png" alt="" />
                </div>
              </div>
            </button>
            <button>
              <div className="relative flex justify-center items-center bg-slate-200 rounded-xl w-[250px] h-[75px]">
                <h1 className="font-semibold">Coming soon!</h1>
                <div className="absolute hover:hidden">
                  <img src="download.png" alt="" />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <AppPreviewDisplay
        text="What Ride Callers See"
        img1="apppreview.png"
        img2="apppreview3.png"
        img3="apppreview9.png"
        img4="apppreview4.png"
      />
      <AppPreviewDisplay
        text="What Ride Providers See"
        img1="apppreview6.png"
        img2="apppreview5.png"
        img3="apppreview8.png"
        img4="apppreview7.png"
      />
      <div className="space-y-3 mx-[360px]">
        <h1 className="font-semibold text-neutral-200 text-3xl">App Description</h1>
        <p className="text-neutral-200 font-light text-xl">
          RideCaller is to be the leading marketplace for finding arranged rides near you. Whether it's for prom,
          graduation, a wedding, or any other special occassion of yours,
          RideCaller makes booking an executive ride easy. Find local chauffeurs
          driving a wide range of vehicles! Or, join the platform with your luxurious vehicle and become a RideProvider! Communicate and book appointments
          with your driver or client effortlessly. Call a ride with RideCaller!
        </p>
      </div>
      <div className="space-y-3 mx-[360px]">
        <h1 className="font-bold text-neutral-200 text-xl">Project Structure</h1>
        <p className="text-neutral-200 font-light text-sm">Built with React Native, Expo, & PostgreSQL. Custom React components with NativeBase and gluestack-ui integration. Cross platform mobile application for both Andriod and iOS. Web version of the application & new features are currently under construction. Questions, comments, or inquires may be directed to aarons.developments@gmail.com</p>
      </div>
      {/* <div className="space-y-3 mx-[360px]">
        <h1 className="font-semibold text-neutral-200 text-3xl">
          To Be Featured In
        </h1>
        <div className="grid grid-cols-4">
          <div className="w-40 h-32 bg-yellow-400"></div>
          <div className="w-40 h-32 bg-yellow-400"></div>
          <div className="w-40 h-32 bg-yellow-400"></div>
          <div className="w-40 h-32 bg-yellow-400"></div>
        </div>
      </div> */}
    </div>
  );
}
