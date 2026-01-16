import React from "react";
import resumePdf from "../assets/Resume-Winter2026.pdf";

const Resume = () => {
  return (
    <div className="w-full h-[80vh]">
      <iframe
        src={resumePdf}
        className="w-full h-full border-0"
        title="Len Livshits Resume"
      />
    </div>
  );
};

export default Resume;
