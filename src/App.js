import "./App.css";
import { Routes, Route } from "react-router-dom";
import sidebarDesktop from "./assets/images/bg-sidebar-desktop.svg";
import List from "./components/List";
import Info from "./containers/Info";
import Plan from "./containers/Plan";
import FooterButton from "./components/FooterButton";

function App() {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="sm:w-3/4 w-full sm:h-[600px] h-[700px] bg-white flex sm:flex-row sm:items-start flex-col items-center sm:rounded-2xl">
          <div className="sm:w-[320px] lg:w-[400px] sm:h-full  w-full h-[200px] sm:bg-[url('./assets/images/bg-sidebar-desktop.svg')]  bg-[url('./assets/images/bg-sidebar-mobile.svg')] bg-cover bg-center bg-no-repeat sm:rounded-2xl">
            <ul className=" mt-5 mx-3 text-white sm:block flex justify-center h-fit">
              <li className="mx-3 h-fit">
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
          <div className="w-full  h-full bg-ligh-gray sm:bg-transparent flex justify-center ">
            <div className=" lg:w-[500px] sm:w-3/4 h-full w-4/5 bg-white -translate-y-8  sm:translate-y-0 sm:rounded-none rounded-2xl p-5 sm:p-0">
              <Plan />
            </div>
          </div>

          <div className="w-full h-[100px] bg-white sm:hidden flex justify-center">
            <div className="w-4/5 h-full">
              <FooterButton />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-full h-screen flex justify-center items-center">
        <div className="w-full h-fit flex flex-col justify-center items-center ">
          <div className="sm:w-4/5  w-full h-full sm:bg-white bg-ligh-gray sm:rounded-2xl flex flex-col sm:flex-row sm:py-4 sm:pl-4">
            <div className=" sm:h-full h-full  sm:bg-[url('./assets/images/bg-sidebar-desktop.svg')]  bg-[url('./assets/images/bg-sidebar-mobile.svg')] bg-cover bg-center bg-no-repeat sm:w-1/3 sm:min-w-[200px] w-full sm:rounded-2xl">
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
              <div className=" translate-y-[-30px] sm:translate-y-0  sm:w-[75%]  h-fit w-[90%] bg-white sm:bg-transparent sm:rounded-none rounded-2xl p-5 sm:p-0">
                <Plan />
              </div>
              <div className="bg-white sm:bg-transparent h-[100px]  mt-5 sm:w-[75%] w-full flex justify-end items-center sm:px-0 px-5">
                <button className="px-5 py-2 bg-marine-blue h-fit text-white rounded-md">
                  Next Step
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default App;

//url info
