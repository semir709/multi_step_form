import React from "react";

const List = ({ number, step, text }) => {
  return (
    <div className="flex items-center mb-5">
      <div className="rounded-full border px-4 py-2">{number}</div>
      <div className="ml-3 sm:block hidden">
        <p className="text-base text-cool-gray uppercase">STEP {step}</p>
        <p className="text-lg uppercase">{text}</p>
      </div>
    </div>
  );
};

export default List;
