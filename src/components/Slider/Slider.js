import React, { useContext, useEffect, useRef } from "react";
import "./slider.css";
import { Context } from "../../utils";

const Slider = ({ setSlide }) => {
  const { yearly, setStorePlan, storePlan } = useContext(Context);
  const inputRef = useRef(null);

  return (
    <div>
      <label class="switch">
        <input
          ref={inputRef}
          type="checkbox"
          onClick={() => setSlide((prev) => !prev)}
        />
        <span class="slider round"></span>
      </label>
    </div>
  );
};

export default Slider;
