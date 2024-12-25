import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <>
      <div class="card-loader">
        <div class="loader-card">
          {/* <p>loading</p>
          <div class="words">
            <span class="word">buttons</span>
            <span class="word">forms</span>
            <span class="word">switches</span>
            <span class="word">cards</span>
            <span class="word">buttons</span>
          </div> */}
          <p>
            A <span className="word">Web Developer</span>
            passionate about
            <span> Designing</span> and
            <span> Development</span>.
          </p>
        </div>
      </div>
    </>
  );
};

export default Loader;

