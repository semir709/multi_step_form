import React, { useState } from "react";
import HeaderInfo from "../components/HeaderInfo";
import { AddOnsCard } from "../components/AddOnsCard";

const addOnsList = [
  {
    text: "Online service",
    smallText: "Access to multiplayer games",
    price: "+$1/mo",
    yearlyPrice: "+$10/yr",
  },
  {
    text: "Large storage",
    smallText: "Extra 1TB of cloud save",
    price: "+$2/mo",
    yearlyPrice: "+$20/yr",
  },
  {
    text: "Pro",
    smallText: "$15/mo",
    price: "+$2/mo",
    yearlyPrice: "+$20/yr",
  },
];

const AddOns = () => {
  const [yearly, setYearly] = useState(false);
  return (
    <div className="mt-5 w-full">
      <HeaderInfo
        title={"Pick Add-ons"}
        text={"Add ons help enchance your gaming experience"}
      />

      <div className="mt-5">
        {addOnsList.map(({ text, smallText, price, yearlyPrice }) => (
          <AddOnsCard
            text={text}
            smallText={smallText}
            price={price}
            yearlyPrice={yearlyPrice}
            yearly={yearly}
          />
        ))}
      </div>
    </div>
  );
};

export default AddOns;
