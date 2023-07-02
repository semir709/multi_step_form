import React from "react";
import svgThank from "../assets/images/icon-thank-you.svg";

const ThankYou = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <img src={svgThank} alt="" />
      <h1 className="text-marine-blue text-3xl font-bold my-4">Thank you!</h1>
      <p className="text-center text-cool-gray text-base">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quidem, voluptas!
      </p>
    </div>
  );
};

export default ThankYou;
