import React from "react";

const List = ({ number, step, text }) => {
  return (
    <div className="flex items-center sm:mb-5 mt-2 sm:mt-0">
      <div className="rounded-full border px-4 py-2">{number}</div>
      <div className="ml-3 sm:block hidden ">
        <p className=" text-cool-gray uppercase lg:text-md text-base">
          STEP {step}
        </p>
        <p className=" uppercase md:text-md text-base">{text}</p>
      </div>
    </div>
  );
};

export default List;
