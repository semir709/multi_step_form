import React, { useState } from "react";
import HeaderInfo from "../components/HeaderInfo";
import arcade from "../assets/images/icon-arcade.svg";
import advanced from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";
import Slider from "../components/Slider/Slider";
import Card from "../components/Card";

const cards = [
  {
    title: "Arcade",
    textMonthly: "$9/mo",
    textYearly: "$90/yr",
    img: arcade,
    alt: "arcade",
  },
  {
    title: "Advanced",
    textMonthly: "$12/mo",
    textYearly: "$120/yr",
    img: advanced,
    alt: "advanced",
  },
  {
    title: "Pro",
    textMonthly: "$15/mo",
    textYearly: "$150/yr",
    img: pro,
    alt: "pro",
  },
];

const Plan = () => {
  const [slide, setSlide] = useState(true);
  const [cardState, setCardState] = useState(0);

  return (
    <div className="mt-5 h-full w-full r">
      <HeaderInfo
        title={"Select you plan"}
        text={"You have the option of monthly or yearly billing."}
      />

      <div className="flex justify-between flex-wrap mt-5">
        {cards.map(({ title, textMonthly, textYearly, img, alt }, index) => (
          <Card
            image={img}
            alt={alt}
            title={title}
            textMonthly={textMonthly}
            textYearly={textYearly}
            slide={slide}
            onClick={() => setCardState(index)}
            state={cardState}
            index={index}
          />
        ))}
      </div>

      <div className="flex w-full justify-center bg-custom-magnolia mt-5 px-2 py-5 rounded-lg">
        <p
          className={`mx-4 font-medium ${
            slide ? "text-marine-blue" : "text-cool-gray"
          }`}
        >
          Monthly
        </p>
        <Slider setSlide={setSlide} />
        <p
          className={`mx-4 font-medium ${
            slide ? "text-cool-gray" : "text-marine-blue"
          }`}
        >
          Yearly
        </p>
      </div>
    </div>
  );
};

export default Plan;
