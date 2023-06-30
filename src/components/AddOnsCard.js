import React, { useState } from "react";

export const AddOnsCard = ({ text, smallText, price, yearlyPrice, yearly }) => {
  const [isCkecked, setIsChecked] = useState(false);
  return (
    <div
      className={`flex justify-between items-center my-4 border px-4 py-2 rounded-md hover:cursor-pointer ${
        isCkecked && "bg-custom-magnolia border-marine-blue"
      }`}
      onClick={() => setIsChecked((prev) => !prev)}
    >
      <div className="flex items-center">
        <div className="me-5">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            class="w-4 h-4 rounded"
            checked={isCkecked}
          />
        </div>
        <div>
          <p className="text-lg text-marine-blue font-semibold">{text}</p>
          <p className="text-base text-cool-gray">{smallText}</p>
        </div>
      </div>
      <div className="">
        <p className="text-base text-purplish-blue">
          {yearly ? yearlyPrice : price}
        </p>
      </div>
    </div>
  );
};
