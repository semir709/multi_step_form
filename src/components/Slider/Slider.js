import React, { useContext, useRef } from "react";
import "./slider.css";
import { Context } from "../../utils";

const Slider = ({ setSlide }) => {
  const { yearly } = useContext(Context);
  const inputRef = useRef(null);

  return (
    <div>
      <label class="switch">
        <input
          ref={inputRef}
          type="checkbox"
          onClick={() => setSlide((prev) => !prev)}
          checked={yearly}
        />
        <span class="slider round"></span>
      </label>
    </div>
  );
};

export default Slider;
