import React from "react";
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
    const pageWidth = typeof window !== 'undefined' ? window.innerWidth * 0.95 : 800;

  const PDFViewer = () => {
    return (
      <div className="">
        <Document file="devresume.pdf">
          <Page renderTextLayer={false} pageNumber={1} width={pageWidth} />
        </Document>
      </div>
    );
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
      <div className="mt-20 ml-4 lg:ml-12">
      <PDFViewer />
      </div>
    </div>
  );
}
