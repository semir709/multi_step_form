import "./App.css";
import { Routes, Route } from "react-router-dom";
import sidebarDesktop from "./assets/images/bg-sidebar-desktop.svg";
import List from "./components/List";
import Info from "./containers/Info";
import Plan from "./containers/Plan";

function App() {
  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center sm:bg-ligh-gray">
        <div className="sm:w-4/5 sm:h-[600px] w-full h-full sm:bg-white bg-ligh-gray sm:rounded-2xl flex flex-col sm:flex-row sm:py-4 sm:pl-4">
          <div className=" sm:h-full h-[20%]  sm:bg-[url('./assets/images/bg-sidebar-desktop.svg')]  bg-[url('./assets/images/bg-sidebar-mobile.svg')] bg-cover bg-center bg-no-repeat sm:w-1/3 sm:min-w-[200px] w-full sm:rounded-2xl">
            <ul className=" my-5 mx-3 text-white sm:block flex justify-center">
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
          <div className="w-full h-full sm:mx-3 flex flex-col items-center justify-between ">
            <div className=" translate-y-[-30px] sm:translate-y-0  sm:w-[75%]  h-full w-[90%] bg-white sm:bg-transparent sm:rounded-none rounded-2xl p-5 sm:p-0">
              {/* url */}
              <Info />
              {/* <Plan /> */}
            </div>
            <div className="bg-white sm:bg-transparent h-[20%]  mt-5 sm:w-[75%] w-full flex justify-end items-center sm:px-0 px-5">
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
