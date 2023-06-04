import "./App.css";
import { Routes, Route } from "react-router-dom";
import sidebarDesktop from "./assets/images/bg-sidebar-desktop.svg";

function App() {
  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center bg-ligh-gray">
        <div className="w-3/5 h-[600px] flex p-4 bg-white rounded-2xl">
          <div className="bg-[url('./assets/images/bg-sidebar-desktop.svg')] h-full bg-no-repeat w-2/4 rounded-2xl text-white relative ">
            <ul className="ml-5 mt-5">
              <li className="flex items-center mb-5">
                <div className="rounded-full border px-4 py-2">1</div>
                <div className="ml-3">
                  <p className="text-base text-cool-gray uppercase">STEP 1</p>
                  <p className="text-lg uppercase">Your info</p>
                </div>
              </li>

              <li className="flex items-center mb-5">
                <div className="rounded-full border px-4 py-2">2</div>
                <div className="ml-3">
                  <p className="text-base text-cool-gray uppercase">STEP 2</p>
                  <p className="text-lg uppercase">Your info</p>
                </div>
              </li>

              <li className="flex items-center mb-5">
                <div className="rounded-full border px-4 py-2">3</div>
                <div className="ml-3">
                  <p className="text-base text-cool-gray uppercase">STEP 3</p>
                  <p className="text-lg uppercase">Your info</p>
                </div>
              </li>

              <li className="flex items-center mb-5">
                <div className="rounded-full border px-4 py-2">4</div>
                <div className="ml-3">
                  <p className="text-base text-cool-gray uppercase">STEP 4</p>
                  <p className="text-lg uppercase">Your info</p>
                </div>
              </li>
            </ul>
          </div>
          <div className=" w-full h-full rounded-2xl pl-5 flex justify-center">
            <div className="w-3/4 h-3/4 mt-5 ">
              <h1 className="text-2xl font-bold text-marine-blue">
                Personal info
              </h1>
              <p className="text-cool-gray">
                Please provide your name, email address, and phone number.
              </p>

              <form
                action="/"
                method="get"
                className="flex flex-col justify-between mt-[40px] h-full"
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

                <button
                  className="ml-auto  bg-marine-blue py-2 px-4 rounded-lg text-white hover:bg-purplish-blue mb-3"
                  type="submit"
                >
                  Next Step
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <Routes>
        <Route path="/*" element={<h1>info</h1>} />
        <Route path="/plan" element={<h1>plan</h1>} />
        <Route path="/addOns" element={<h1>add-ons</h1>} />
        <Route path="/summary" element={<h1>summary</h1>} />
      </Routes> */}
    </>
  );
}

export default App;
