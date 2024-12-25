import React from "react";
import SivalingamPDF from "../assets/Sivalingam.pdf";

const Resume = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Resume</h1>
      <p>Click the button below to download my resume</p>
      <a
        href={SivalingamPDF}
        download="Sivalingam_Resume.pdf"
        style={{
          display: "inline-block",
          padding: "10px 20px",
          backgroundColor: "#90EE90",
          color: "#000000",
          textDecoration: "none",
          borderRadius: "5px",
          fontWeight: "bold",
          marginTop: "20px",
        }}
      >
        Download Resume
      </a>
    </div>
  );
};

export default Resume;
