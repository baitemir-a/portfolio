import React from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import cv from '../../images/Baitemir Asanbaev.pdf'
import CvControl from "../cv-control/CvControl";


const CvRender: React.FC = () => {
    const pdfWorkerUrl = `https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`;

  return (
    <div style={{ height: "150%", maxWidth: "45%", margin: "50px auto" }}>
        <CvControl cv={cv}/>
       <Worker workerUrl={pdfWorkerUrl}>
        <Viewer fileUrl={cv} />
      </Worker>
    </div>
  );
};

export default CvRender;
