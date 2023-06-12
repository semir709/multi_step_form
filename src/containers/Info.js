import React from "react";
import HeaderInfo from "../components/HeaderInfo";

const Info = () => {
  return (
    <div className=" mt-5 h-full ">
      <HeaderInfo
        title={"Personal info"}
        text={"Please provide your name, email address, and phone number."}
      />

      <form
        action="/"
        method="get"
        className="flex flex-col justify-between mt-[40px] lg:h-[65%] md:h-[70%]"
      >
        <div className="flex flex-col text-marine-blue">
          <label htmlFor="name">Name</label>
          <input
            required
            placeholder="e.g.Stephen King"
            name="name"
            id="name"
            type="text"
            className="p-2 rounded-lg border border-ligh-gray focus:border-marine-blue mb-5 mt-2"
          />
          <label htmlFor="email">Email address</label>
          <input
            required
            placeholder="e.g.stephenking@lorem.com"
            name="email"
            id="email"
            type="text"
            className="p-2 rounded-lg border border-ligh-gray focus:border-marine-blue mb-5 mt-2"
          />
          <label htmlFor="number">Phone Number</label>
          <input
            placeholder="e.g.+1 234 567 890"
            required
            name="number"
            id="number"
            type="text"
            className="p-2 rounded-lg border border-ligh-gray focus:border-marine-blue mb-5 mt-2"
          />
        </div>
      </form>
    </div>
  );
};

export default Info;
