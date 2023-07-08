import React from "react";
import SideBar from "./components/SideBar";
import RightBar from "./components/RightBar";
import "./styles/App.scss";
import "./styles/RightBar.scss";
import { SiWechat } from "react-icons/si";
import { VscThreeBars } from "react-icons/vsc";
import "./styles/MediaQueries.scss";

const App = () => {
  return (
    <>
      <div className="App">
      <button className="collapse" >
        <VscThreeBars />
      </button>
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
