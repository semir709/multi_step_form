import "./App.css";
import { Routes, Route } from "react-router-dom";
import sidebarDesktop from "./assets/images/bg-sidebar-desktop.svg";
import List from "./components/List";

function App() {
  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center lg:bg-ligh-gray">
        <div className="lg:w-3/5 lg:h-[600px] w-full h-full lg:bg-white bg-ligh-gray lg:rounded-2xl flex flex-col lg:flex-row lg:py-4 lg:pl-4">
          <div className=" lg:h-full h-[20%]  lg:bg-[url('./assets/images/bg-sidebar-desktop.svg')]  bg-[url('./assets/images/bg-sidebar-mobile.svg')] bg-cover bg-center bg-no-repeat lg:w-1/3 lg:min-w-[200px] w-full lg:rounded-2xl">
            <ul className=" my-5 mx-3 text-white lg:block flex justify-center">
              <li className="mx-3">
                <List number={1} text={"Your info"} step={1} />
              </li>
              <li className="mx-3">
                <List number={2} text={"Your info"} step={2} />
              </li>
              <li className="mx-3">
                <List number={3} text={"Your info"} step={3} />
              </li>
              <li className="mx-3">
                <List number={4} text={"Your info"} step={4} />
              </li>
            </ul>
          </div>
          <div className=" w-full h-full lg:mx-3 flex flex-col items-center justify-between ">
            <div className=" translate-y-[-30px] lg:translate-y-0  min-[1200px]:w-[400px] lg:w-full h-full w-[80%] bg-white lg:bg-transparent lg:rounded-none rounded-2xl p-5 lg:p-0">
              {/* url */}
              <div className=" mt-5 h-full ">
                <h1 className="text-2xl font-bold text-marine-blue">
                  Personal info
                </h1>
                <p className="text-cool-gray">
                  Please provide your name, email address, and phone number.
                </p>

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
            </div>
            <div className="bg-white lg:bg-transparent h-[20%]  mt-5 min-[1200px]:w-[400px] w-full flex justify-end items-center px-5">
              <button className="px-5 py-2 bg-marine-blue h-fit text-white rounded-md">
                Next Step
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
