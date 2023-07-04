import React, { useContext, useState } from "react";
import HeaderInfo from "../components/HeaderInfo";
import { AddOnsCard } from "../components/AddOnsCard";
import { Context } from "../utils";

const addOnsList = [
  {
    text: "Online service",
    smallText: "Access to multiplayer games",
    price: "+$1/mo",
    yearlyPrice: "+$10/yr",
    slug: 0,
  },
  {
    text: "Large storage",
    smallText: "Extra 1TB of cloud save",
    price: "+$2/mo",
    yearlyPrice: "+$20/yr",
    slug: 1,
  },
  {
    text: "Pro",
    smallText: "$15/mo",
    price: "+$2/mo",
    yearlyPrice: "+$20/yr",
    id: 2,
  },
];

const AddOns = () => {
  const [yearly, setYearly] = useState(false);

  const {
    onlineService,
    largeStorage,
    pro,
    setOnlineService,
    setLargeStorage,
    setPro,
  } = useContext(Context);

  return (
    <div className="mt-5 w-full">
      <HeaderInfo
        title={"Pick Add-ons"}
        text={"Add ons help enchance your gaming experience"}
      />

      <div className="mt-5">
        <AddOnsCard
          text={addOnsList[0].text}
          smallText={addOnsList[0].smallText}
          price={addOnsList[0].price}
          yearlyPrice={addOnsList[0].yearlyPrice}
          yearly={yearly}
          isChecked={onlineService}
          setSelect={setOnlineService}
        />

        <AddOnsCard
          text={addOnsList[1].text}
          smallText={addOnsList[1].smallText}
          price={addOnsList[1].price}
          yearlyPrice={addOnsList[1].yearlyPrice}
          yearly={yearly}
          isChecked={largeStorage}
          setSelect={setLargeStorage}
        />

        <AddOnsCard
          text={addOnsList[2].text}
          smallText={addOnsList[2].smallText}
          price={addOnsList[2].price}
          yearlyPrice={addOnsList[2].yearlyPrice}
          yearly={yearly}
          isChecked={pro}
          setSelect={setPro}
        />
      </div>
    </div>
  );
};

export default AddOns;
