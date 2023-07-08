import React from "react";
import SecComOfRightBar from "./SecComOfRightBar";
import FirstComOfRightBar from "./FirstComOfRightBar";

const RightBar = () => {
  return (
    <div className="parentRightBar">
      <h1>You currently have 3 requests</h1>
      <FirstComOfRightBar />
      <SecComOfRightBar />
    </div>
  );
};

export default RightBar;
