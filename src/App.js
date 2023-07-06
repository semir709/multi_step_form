import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import sidebarDesktop from "./assets/images/bg-sidebar-desktop.svg";
import List from "./components/List";
import Info from "./containers/Info";
import Plan from "./containers/Plan";
import FooterButton from "./components/FooterButton";
import AddOns from "./containers/AddOns";
import Finishing from "./containers/Finishing";
import ThankYou from "./containers/ThankYou";
import { createContext, useContext, useRef, useState } from "react";

import { Context } from "./utils";

import { cards } from "./utils";
import { addOnsList } from "./utils";

function App() {
  const [emailInput, setEmailInput] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");

  const emailInputRef = useRef(null);
  const nameInputRef = useRef(null);
  const phoneInputRef = useRef(null);

  const [onlineService, setOnlineService] = useState(false);
  const [largeStorage, setLargeStorage] = useState(false);
  const [pro, setPro] = useState(false);

  const [cardState, setCardState] = useState(0);

  const [yearly, setYearly] = useState(false);

  const [storePlan, setStorePlan] = useState({
    title: cards[0].title,
    priceYearly: cards[0].priceYearly,
    priceMonthly: cards[0].priceMonthly,
  });

  const [addOnsCheckeck, setAddOnsCheck] = useState(
    addOnsList.map((data) => {
      return {
        check: false,
        title: data.text,
        monthlyPrice: data.price,
        yearlyPrice: data.yearlyPrice,
      };
    })
  );

  return (
    <>
      <Context.Provider
        value={{
          emailInput,
          phoneInput,
          nameInput,
          setEmailInput,
          setPhoneInput,
          setNameInput,
          emailInputRef,
          nameInputRef,
          phoneInputRef,
          cardState,
          setCardState,
          setOnlineService,
          setLargeStorage,
          setPro,
          onlineService,
          largeStorage,
          pro,
          yearly,
          setYearly,
          storePlan,
          setStorePlan,
          addOnsCheckeck,
          setAddOnsCheck,
        }}
      >
        <div className="w-full h-screen flex justify-center items-center">
          <div className="sm:w-3/4 w-full sm:h-[600px] h-[700px] bg-white flex sm:flex-row sm:items-start flex-col items-center sm:rounded-2xl">
            <div className="sm:w-[320px] lg:w-[400px] sm:h-full  w-full h-[200px] sm:bg-[url('./assets/images/bg-sidebar-desktop.svg')]  bg-[url('./assets/images/bg-sidebar-mobile.svg')] bg-cover bg-center bg-no-repeat sm:rounded-2xl">
              <ul className=" mt-5 mx-3 text-white sm:block flex justify-center h-fit">
                <li className="mx-3 h-fit">
                  <List number={1} text={"Your info"} step={1} slug={"/"} />
                </li>
                <li className="mx-3">
                  <List
                    number={2}
                    text={"Select Plan"}
                    step={2}
                    slug={"/plan"}
                  />
                </li>
                <li className="mx-3">
                  <List number={3} text={"Add-ons"} step={3} slug={"/addOns"} />
                </li>
                <li className="mx-3">
                  <List
                    number={4}
                    text={"summary"}
                    step={4}
                    slug={"/finishing"}
                  />
                </li>
              </ul>
            </div>
            <div className="w-full  h-full bg-ligh-gray sm:bg-transparent flex justify-center ">
              <div className=" lg:w-[500px] sm:w-3/4 h-full w-4/5 bg-white -translate-y-8  sm:translate-y-0 sm:rounded-none rounded-2xl p-5 sm:p-0 flex flex-col justify-between">
                <Routes>
                  <Route path="/*" element={<Info />}></Route>
                  <Route path="/plan" element={<Plan />}></Route>
                  <Route path="/addOns" element={<AddOns />}></Route>
                  <Route path="/finishing" element={<Finishing />}></Route>
                  <Route path="/thanks" element={<ThankYou />}></Route>
                </Routes>
                <div className="my-5 mx-2 sm:block hidden">
                  <FooterButton />
                </div>
              </div>
            </div>

            <div className="w-full h-[100px] bg-white sm:hidden flex justify-center">
              <div className="w-4/5 h-full">
                <FooterButton />
              </div>
            </div>
          </div>
        </div>
      </Context.Provider>
    </>
  );
}

export default App;
