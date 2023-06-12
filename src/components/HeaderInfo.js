import React from "react";

const HeaderInfo = ({ title, text }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-marine-blue">{title}</h1>
      <p className="text-cool-gray">{text}</p>
    </div>
  );
};

export default HeaderInfo;
