import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { pdfjs } from "react-pdf";
import Navigation from "@components/Navigation";
import NavigationButton from "@components/NavigationButton";
import { GrContactInfo, GrWorkshop } from "react-icons/gr";
import { LuNewspaper } from "react-icons/lu";
import { BsMailbox } from "react-icons/bs";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export default function Resume() {
  const [pageNumber, setPageNumber] = useState(1);

  const pageWidth =
    typeof window !== "undefined" ? window.innerWidth * 0.95 : 800;

  const PDFViewer = () => {
    return (
      <div className="">
        <Document file="devresume.pdf">
          <Page
            renderTextLayer={false}
            pageNumber={pageNumber}
            width={
              typeof window !== "undefined"
                ? window.outerWidth <= 400
                  ? pageWidth
                  : pageWidth / 1.5
                : pageWidth
            }
          />
        </Document>
      </div>
    );
  };
  const handleDownload = () => {
    // const link = document.createElement("a");
    // link.href = "devresume.pdf";
    // link.download = "Aaron-Matharoo-Resume.pdf";
    // link.click();
    console.log('downloaded')
  };

  return (
    <div className="">
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
            text="CONTACT"
            link="/Contact"
            icon={<BsMailbox size={30} />}
          />
        }
      />
      <div className="lg:pt-0">
        <div className=" absolute z-30 lg:top-20 bottom-10 left-1/2 transform -translate-x-1/2 h-min">
          <button
            className="flex items-center space-x-1 bg-white lg:hover:scale-110 active:scale-95 duration-100 text-2xl hover:font-semibold border-y-2 border-x-4 hover:border-x-8 border-black text-black py-1 px-2"
            onClick={handleDownload}
          >
            <h1>DOWNLOAD</h1>
            <div>
              <img
                src="downloadicon.png"
                alt=""
                className="h-8 hidden lg:block"
              />
            </div>
          </button>
        </div>
        {/* <div className={`mt-20 lg:mt-20 lg:ml-[20%] ml-4 relative z-0`}>
          <PDFViewer />

          <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 z-10 text-white p-4 flex">
            <button className="flex items-center bg-white hover:scale-110 active:scale-95 duration-100 border-y-2 border-x-4 hover:border-x-8 border-black text-black py-1 px-2">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="1em"
                width="1em"
              >
                <path d="M4.431 12.822l13 9A1 1 0 0019 21V3a1 1 0 00-1.569-.823l-13 9a1.003 1.003 0 000 1.645z" />
              </svg>
            </button>
            <div className="bg-white flex items-center p-3 border-2 border-black">
              <p className="font-bold text-black">Page {pageNumber}</p>
            </div>
            <button className="flex items-center space-x-1 bg-white lg:hover:scale-110 active:scale-95 duration-100 text-2xl hover:font-semibold border-y-2 border-x-4 hover:border-x-8 border-black text-black py-1 px-2">
              <div className="rotate-180">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                >
                  <path d="M4.431 12.822l13 9A1 1 0 0019 21V3a1 1 0 00-1.569-.823l-13 9a1.003 1.003 0 000 1.645z" />
                </svg>
              </div>
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
}
