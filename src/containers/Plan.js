import React, { useContext, useEffect, useState } from "react";
import HeaderInfo from "../components/HeaderInfo";

import Slider from "../components/Slider/Slider";
import Card from "../components/Card";
import { Context } from "../utils";

import { cards } from "../utils";

const Plan = () => {
  const { cardState, setCardState, yearly, setYearly, setStorePlan } =
    useContext(Context);

  const cardClick = (index, data) => {
    setCardState(index);

    setStorePlan({
      title: data.title,
      priceYearly: data.priceYearly,
      priceMonthly: data.priceMonthly,
    });
  };

  return (
    <div className="mt-5 h-fit w-full ">
      <HeaderInfo
        title={"Select you plan"}
        text={"You have the option of monthly or yearly billing."}
      />

      <div className="flex justify-between lg:flex-row flex-col  mt-5 ">
        {cards.map((data, index) => (
          <Card
            image={data.img}
            alt={data.alt}
            title={data.title}
            textMonthly={data.priceMonthly}
            textYearly={data.priceYearly}
            slide={yearly}
            onClick={() => cardClick(index, data)}
            state={cardState}
            index={index}
          />
        ))}
      </div>

      <div className="flex w-full justify-center bg-custom-magnolia mt-5 px-2 py-4 rounded-lg">
        <p
          className={`mx-4 font-base ${
            yearly === false ? "text-marine-blue" : "text-cool-gray"
          }`}
        >
          Monthly
        </p>
        <Slider setSlide={setYearly} />
        <p
          className={`mx-4 font-base ${
            yearly === false ? "text-cool-gray" : "text-marine-blue"
          }`}
        >
          Yearly
        </p>
      </div>
    </div>
  );
};

export default Plan;
