import React, { useContext } from "react";
import HeaderInfo from "../components/HeaderInfo";
import { AddOnsCard } from "../components/AddOnsCard";
import { Context } from "../utils";

import { addOnsList } from "../utils";

const AddOns = () => {
  const { yearly } = useContext(Context);

  return (
    <div className="mt-5 w-full">
      <HeaderInfo
        title={"Pick Add-ons"}
        text={"Add ons help enchance your gaming experience"}
      />

      <div className="mt-5">
        {addOnsList.map((data, index) => (
          <AddOnsCard
            text={data.text}
            smallText={data.smallText}
            price={data.price}
            yearlyPrice={data.yearlyPrice}
            yearly={yearly}
            index={index}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default AddOns;
