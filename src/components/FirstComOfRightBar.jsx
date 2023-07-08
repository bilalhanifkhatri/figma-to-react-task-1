import React from "react";
import "../styles/FirstComOfRightBar.scss";

const FirstComOfRightBar = () => {
  return (
    <div className="firstDiv">
      <div className="firstSec">
        <div>
          <h3>St Judes Hospital</h3>
          <p>Sarasota,FL. 33178</p>
        </div>
        <div className="secDivIn">
          <div>
            <h3>10</h3>
            <p>October</p>
          </div>
          <div>
            <h3>-</h3>
            <p>&nbsp;</p>
          </div>
          <div>
            <h3>70</h3>
            <p>December </p>
          </div>
        </div>
        <div>
          <h3>20 Rooms</h3>
          <p>10 Singles, 10 doubles</p>
        </div>
      </div>
      <div className="secondSec">
        <div className="yellow">Received</div>
        <div className="center">Negotiating</div>
        <div>Completed</div>
      </div>
    </div>
  );
};

export default FirstComOfRightBar;
