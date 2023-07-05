import React from "react";

const Card = ({
  image,
  alt,
  title,
  textMonthly,
  textYearly,
  slide,
  onClick,
  state,
  index,
}) => {
  return (
    <div
      className={`lg:w-[150px] h-fit w-full  lg:my-3 my-1  flex lg:flex-col lg:items-start lg:justify-between items-center  border border-ligh-gray  lg:p-5 p-3 rounded-2xl cursor-pointer hover:border-marine-blue ${
        index === state ? "bg-custom-magnolia" : "bg-white"
      }`}
      onClick={onClick}
    >
      <img src={image} alt={alt} className="h-[35px] w-[35px] lg:mb-[50px]" />
      <div className="lg:ms-0 ms-5 ">
        <h3 className="text-base text-marine-blue">{title}</h3>
        {slide === false ? (
          <p className="text-cool-gray text-sm lg:text-base">
            {" "}
            ${textMonthly}/mo
          </p>
        ) : (
          <p className="text-cool-gray text-sm lg:text-base">
            ${textYearly}/yr
          </p>
        )}
        {slide && (
          <p className="text-marine-blue text-sm lg:text-base">2 months free</p>
        )}
      </div>
    </div>
  );
};

export default Card;
