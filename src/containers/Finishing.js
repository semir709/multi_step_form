import React, { useContext } from "react";
import HeaderInfo from "../components/HeaderInfo";
import { Context } from "../utils";

import { addOnsList } from "../utils";

const Finishing = () => {
  const { storePlan, yearly, addOnsCheckeck } = useContext(Context);

  console.log(addOnsCheckeck);

  return (
    <div className="mt-5">
      <HeaderInfo
        title={"Finishing up"}
        text={"Double-check everything looks OK before confirming"}
      />

      <div className="mt-5">
        <div className="bg-custom-magnolia w-full py-5 px-3 rounded-md">
          <div className="flex w-full justify-between items-center">
            <div>
              <span className="block text-marine-blue font-bold text-lg">
                {storePlan.title}
              </span>
              <span className="text-sm text-cool-gray hover:cursor-pointer underline">
                Change
              </span>
            </div>
            <label className="text-marine-blue font-bold text-base">
              {yearly
                ? "$" + storePlan.priceYearly + "/yr"
                : "$" + storePlan.priceMonthly + "/mo"}
            </label>
          </div>
          <div className="w-full bg-ligh-gray h-[1px] my-5"></div>

          {addOnsCheckeck
            .filter(({ check }) => check === true)
            .map(({ title, monthlyPrice, yearlyPrice }) => (
              <div className="flex w-full justify-between items-center my-3">
                <span className="text-sm text-cool-gray">{title}</span>
                <label className="text-sm text-marine-blue">
                  {yearly
                    ? "+$" + yearlyPrice + "/yr"
                    : "+$" + monthlyPrice + "/mo"}
                </label>
              </div>
            ))}
        </div>
        <div className="flex justify-between w-full items-center mt-5 px-3">
          <span className="text-sm text-cool-gray">Total(per year)</span>
          <label className="text-2xl text-purplish-blue">+$12/mo</label>
        </div>
      </div>
    </div>
  );
};

export default Finishing;
