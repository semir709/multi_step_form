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
      className={`w-[150px]  border border-ligh-gray  p-3 rounded-2xl cursor-pointer hover:border-marine-blue ${
        index === state ? "bg-custom-magnolia" : "bg-white"
      }`}
      onClick={onClick}
    >
      <img src={image} alt={alt} className="mb-[35px]" />
      <h3 className="text-lg text-marine-blue">{title}</h3>
      {slide ? (
        <p className="text-cool-gray">{textMonthly}</p>
      ) : (
        <p className="text-cool-gray">{textYearly}</p>
      )}
      {slide === false && (
        <p className="text-marine-blue text-sm">2 months free</p>
      )}
    </div>
  );
};

export default Card;
