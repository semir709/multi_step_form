import React, { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../utils";

export const AddOnsCard = ({
  text,
  smallText,
  price,
  yearlyPrice,
  yearly,
  isChecked,
  setSelect,
}) => {
  return (
    <div
      className={`flex justify-between items-center my-4 border px-4 py-2 rounded-md hover:cursor-pointer ${
        isChecked && "bg-custom-magnolia border-marine-blue"
      }`}
      onClick={() => {
        setSelect((prev) => !prev);
      }}
    >
      <div className="flex items-center">
        <div className="me-5">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            class="w-4 h-4 rounded"
            checked={isChecked}
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
