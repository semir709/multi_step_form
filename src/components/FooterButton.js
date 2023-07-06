import React, { createElement, useContext } from "react";
import { Context, validateEmail } from "../utils";
import { useLocation, useNavigate } from "react-router-dom";
import { addOnsList } from "../utils";
import { cards } from "../utils";

const isEmptyMessage = (inputRef, id, messageId, messageText) => {
  const target = inputRef.current;
  target.style.border = "1px red solid";

  const emailHolder = target.parentElement.querySelector("#" + id);

  const message = document.createElement("label");

  message.innerHTML = messageText;
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
};

const FooterButton = () => {
  const {
    emailInput,
    phoneInput,
    nameInput,
    emailInputRef,
    nameInputRef,
    phoneInputRef,
    setEmailInput,
    setPhoneInput,
    setNameInput,
    setCardState,
    setOnlineService,
    setLargeStorage,
    setPro,
    setAddOnsCheck,
    setYearly,
    setStorePlan,
  } = useContext(Context);
  const navigate = useNavigate();
  const location = useLocation();

  const checkInputs = () => {
    if (
      emailInput.length > 0 &&
      nameInput.length > 0 &&
      phoneInput.length > 0
    ) {
      if (location.pathname === "/") {
        if (validateEmail(emailInput)) navigate("/plan");
        else {
          clearMessage(phoneInputRef, "phoneMessage");
          clearMessage(nameInputRef, "nameMessage");
          clearMessage(emailInputRef, "emailMessage");
          isEmptyMessage(
            emailInputRef,
            "emailHolder",
            "emailMessage",
            "E-mail is not valid"
          );
        }
      }
      if (location.pathname === "/plan") navigate("/addOns");
      if (location.pathname === "/addOns") navigate("/finishing");
      if (location.pathname === "/finishing") navigate("/thanks");
      if (location.pathname === "/thanks") {
        setEmailInput("");
        setPhoneInput("");
        setNameInput("");
        setCardState(0);
        setOnlineService(false);
        setLargeStorage(false);
        setPro(false);
        setStorePlan({
          title: cards[0].title,
          priceYearly: cards[0].priceYearly,
          priceMonthly: cards[0].priceMonthly,
        });
        setAddOnsCheck(
          addOnsList.map((data) => {
            return {
              check: false,
              title: data.text,
              monthlyPrice: data.price,
              yearlyPrice: data.yearlyPrice,
            };
          })
        );
        setYearly(false);

        navigate("/");
      }
    } else {
      clearMessage(phoneInputRef, "phoneMessage");
      clearMessage(nameInputRef, "nameMessage");
      clearMessage(emailInputRef, "emailMessage");

      if (emailInput.length === 0) {
        isEmptyMessage(
          emailInputRef,
          "emailHolder",
          "emailMessage",
          "The filed is required"
        );
      }

      if (nameInput.length === 0) {
        isEmptyMessage(
          nameInputRef,
          "nameHolder",
          "nameMessage",
          "The filed is required"
        );
      }

      if (phoneInput.length === 0) {
        isEmptyMessage(
          phoneInputRef,
          "phoneHolder",
          "phoneMessage",
          "The filed is required"
        );
      }
    }
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="w-full h-full  flex justify-between items-center ">
      <div className="">
        {location.pathname !== "/" && (
          <button
            className="text-cool-gray hover:text-marine-blue"
            onClick={goBack}
          >
            Previous
          </button>
        )}
      </div>
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
