import React from "react";

const FooterButton = () => {
  return (
    <div className="w-full h-full  flex justify-between items-center ">
      <div className="">Prevous</div>
      <div className="">
        <button className="px-5 py-2 bg-marine-blue h-fit text-white rounded-md">
          Next Step
        </button>
      </div>
    </div>
  );
};

export default FooterButton;
