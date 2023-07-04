import React from "react";
import { useLocation } from "react-router-dom";

const List = ({ number, step, text, slug }) => {
  const location = useLocation();
  return (
    <div className="flex items-center sm:mb-5 mt-2 sm:mt-0">
      <div
        className={`rounded-full border px-4 py-2 ${
          slug === location.pathname
            ? "bg-light-blue text-black"
            : "bg-transparent text-white"
        }`}
      >
        {number}
      </div>
      <div className="ml-3 sm:block hidden ">
        <p className=" text-cool-gray uppercase  text-base">STEP {step}</p>
        <p className=" uppercase text-base">{text}</p>
      </div>
    </div>
  );
};

export default List;
