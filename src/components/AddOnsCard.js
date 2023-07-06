import React, { useContext } from "react";
import { Context } from "../utils";

export const AddOnsCard = ({
  text,
  smallText,
  price,
  yearlyPrice,
  yearly,
  index,
}) => {
  const { addOnsCheckeck, setAddOnsCheck } = useContext(Context);

  const onClick = () => {
    setAddOnsCheck((prev) => {
      prev[index].check = !prev[index].check;
      return [...prev];
    });
  };

  return (
    <div
      className={`flex justify-between items-center my-4 border px-4 py-2 rounded-md hover:cursor-pointer ${
        addOnsCheckeck[index].check && "bg-custom-magnolia border-marine-blue"
      }`}
      onClick={onClick}
    >
      <div className="flex items-center">
        <div className="me-5">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            class="w-4 h-4 rounded"
            checked={addOnsCheckeck[index].check}
          />
        </div>
        <div>
          <p className="text-lg text-marine-blue font-semibold">{text}</p>
          <p className="text-base text-cool-gray">{smallText}</p>
        </div>
      </div>
      <div className="">
        <p className="text-base text-purplish-blue">
          {yearly ? "+$" + yearlyPrice + "/yr" : "+$" + price + "/mo"}
        </p>
      </div>
    </div>
  );
};
