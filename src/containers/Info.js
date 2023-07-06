import React, { useContext, useEffect } from "react";
import HeaderInfo from "../components/HeaderInfo";
import { Context } from "../utils";
const Info = () => {
  const {
    setEmailInput,
    setPhoneInput,
    setNameInput,
    emailInputRef,
    nameInputRef,
    phoneInputRef,
    emailInput,
    phoneInput,
    nameInput,
  } = useContext(Context);

  const inputChangeEmail = (e) => {
    setEmailInput(e.target.value);
  };
  const inputChangePhone = (e) => {
    setPhoneInput(e.target.value);
  };
  const inputChangeName = (e) => {
    setNameInput(e.target.value);
  };
  return (
    <div className=" mt-5  h-full">
      <HeaderInfo
        title={"Personal info"}
        text={"Please provide your name, email address, and phone number."}
      />

      <form
        action="/plan"
        className="flex flex-col justify-between mt-[40px] h-fit"
      >
        <div className="flex flex-col text-marine-blue">
          <div>
            <div id="nameHolder" className="flex justify-between items-center">
              <label htmlFor="name">Name</label>
            </div>

            <input
              ref={nameInputRef}
              value={nameInput}
              required
              placeholder="e.g.Stephen King"
              name="name"
              id="name"
              type="text"
              className="p-2 rounded-lg border border-ligh-gray focus:border-marine-blue mb-5 mt-2 w-full"
              onChange={inputChangeName}
            />
          </div>
          <div>
            <div id="emailHolder" className="flex justify-between items-center">
              <label htmlFor="email">Email address</label>
            </div>
            <input
              value={emailInput}
              ref={emailInputRef}
              required
              placeholder="e.g.stephenking@lorem.com"
              name="email"
              id="email"
              type="text"
              className="p-2 rounded-lg border border-ligh-gray focus:border-marine-blue mb-5 mt-2 w-full"
              onChange={inputChangeEmail}
            />
          </div>
          <div>
            <div
              id="phoneHolder"
              className="flex justify-between items-center "
            >
              <label htmlFor="number">Phone Number</label>
            </div>
            <input
              value={phoneInput}
              ref={phoneInputRef}
              placeholder="e.g.+1 234 567 890"
              required
              name="number"
              id="number"
              type="text"
              className="p-2 rounded-lg border border-ligh-gray focus:border-marine-blue mb-5 mt-2 w-full"
              onChange={inputChangePhone}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Info;
