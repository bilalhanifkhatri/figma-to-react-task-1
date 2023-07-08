import React from "react";
import SideBar from "./components/SideBar";
import RightBar from "./components/RightBar";
import "./styles/App.scss";
import "./styles/RightBar.scss";
import { SiWechat } from "react-icons/si";

const App = () => {
  return (
    <>
      <div className="App">
        <div className="sideBar">
          <SideBar />
        </div>
        <div className="RightBar">
          <RightBar />
        </div>
        <button className="chatButton">
          <SiWechat />
        </button>
      </div>
    </>
  );
};

export default App;
