import React from "react";
import SideBar from "./components/SideBar";
import RightBar from "./components/RightBar";
import "./App.scss";
import "./styles/RightBar.scss";

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
      </div>
    </>
  );
};

export default App;
