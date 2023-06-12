import React from "react";
import "./slider.css";

const Slider = ({ setSlide }) => {
  return (
    <div>
      <label class="switch">
        <input type="checkbox" onClick={() => setSlide((prev) => !prev)} />
        <span class="slider round"></span>
      </label>
    </div>
  );
};

export default Slider;
