import React, { createElement, useContext } from "react";
import { Context } from "../utils";
import { useLocation, useNavigate } from "react-router-dom";

const isEmptyMessage = (inputRef, id, messageId) => {
  const target = inputRef.current;
  target.style.border = "1px red solid";

  const emailHolder = target.parentElement.querySelector("#" + id);

  const message = document.createElement("label");

  message.innerHTML = "The filed is required";
  message.style.color = "red";
  message.id = messageId;

  emailHolder.append(message);
};

const clearMessage = (inputRef, id) => {
  const target = inputRef.current;

  if (document.querySelector("#" + id)) {
    document.querySelector("#" + id).remove();

    target.style.border =
      "1px solid hsl(229 24% 87% / var(--tw-border-opacity))";
  }

  // if (target) {
  //   target.style.border =
  //     "1px solid hsl(229 24% 87% / var(--tw-border-opacity))";

  //   document.querySelector("#" + id).remove();
  // }
};

const FooterButton = () => {
  const {
    emailInput,
    phoneInput,
    nameInput,
    emailInputRef,
    nameInputRef,
    phoneInputRef,
  } = useContext(Context);
  const navigate = useNavigate();
  const location = useLocation();

  const checkInputs = () => {
    if (
      emailInput.length > 0 &&
      nameInput.length > 0 &&
      phoneInput.length > 0
    ) {
      if (location.pathname === "/") navigate("/plan");
      if (location.pathname === "/plan") navigate("/addOns");
      if (location.pathname === "/addOns") navigate("/finishing");
      if (location.pathname === "/finishing") navigate("/thanks");
      if (location.pathname === "/thanks") navigate("/");
    } else {
      clearMessage(phoneInputRef, "phoneMessage");
      clearMessage(nameInputRef, "nameMessage");
      clearMessage(emailInputRef, "emailMessage");

      if (emailInput.length === 0) {
        isEmptyMessage(emailInputRef, "emailHolder", "emailMessage");
      }

      if (nameInput.length === 0) {
        isEmptyMessage(nameInputRef, "nameHolder", "nameMessage");
      }

      if (phoneInput.length === 0) {
        isEmptyMessage(phoneInputRef, "phoneHolder", "phoneMessage");
      }
    }
  };

  return (
    <div className="w-full h-full  flex justify-between items-center ">
      <div className="">Prevous</div>
      <div className="">
        <button
          type="submit"
          className="px-5 py-2 bg-marine-blue h-fit text-white rounded-md"
          onClick={checkInputs}
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default FooterButton;
