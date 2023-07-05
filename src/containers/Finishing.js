import React, { useContext } from "react";
import HeaderInfo from "../components/HeaderInfo";
import { Context } from "../utils";

const Finishing = () => {
  const { storePlan, yearly } = useContext(Context);

  console.log(storePlan);

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

          <div className="flex w-full justify-between items-center my-3">
            <span className="text-sm text-cool-gray">Online service</span>
            <label className="text-sm text-marine-blue">+$1/mo</label>
          </div>
          <div className="flex w-full justify-between items-center my-3">
            <span className="text-sm text-cool-gray">Larger storage</span>
            <label className="text-sm text-marine-blue">+$2/mo</label>
          </div>
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
