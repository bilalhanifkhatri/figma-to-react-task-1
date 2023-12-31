import React from "react";
import "../styles/SecComOfRightBar.scss";

const SecComOfRightBar = () => {
  return (
    <div className="secondDiv">
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
      <div className="secondSec">Completed</div>
      <div className="thirdSec">
        <div className="innerBox card">
          <span className="note">Rare Find</span>
          <h1>H</h1>
          <h4>Holiday Inn</h4>
          <div>
            <p>1.5 miles away from joblocation.</p>
            <div>
              <div>
                <p>Singles: $120</p>
                <p>Doubles: $145</p>
              </div>
              <button>Book Now</button>
            </div>
          </div>
        </div>
        <div className="innerBox">
          <h1>H</h1>
          <h4>Holiday Inn</h4>
          <div>
            <p>1.5 miles away from joblocation.</p>
            <div>
              <div>
                <p>Singles: $120</p>
                <p>Doubles: $145</p>
              </div>
              <button>Book Now</button>
            </div>
          </div>
        </div>
        <div className="innerBox">
          <h1>H</h1>
          <h4>Holiday Inn</h4>
          <div>
            <p>1.5 miles away from joblocation.</p>
            <div>
              <div>
                <p>Singles: $120</p>
                <p>Doubles: $145</p>
              </div>
              <button>Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecComOfRightBar;
