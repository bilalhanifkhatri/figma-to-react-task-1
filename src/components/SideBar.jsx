import React from "react";

import "../styles/SideBar.scss";

const SideBar = () => {
  return (
    <>
      <div className="parentSideBar">
        <div className="aboveDiv">
          <h1>LODGN</h1>
          <div className="linksDiv">
            <a href="/" className="links">
              Current requests
            </a>
            <a href="/" className="links">
              Ongoing Stays
            </a>
            <a href="/" className="links">
              Previous Stays
            </a>
            <a href="/" className="links">
              Reports
            </a>
          </div>
        </div>
        <div className="belowDiv">
          <button>Log-Out</button>
          <h5>Help-Desk:</h5>
          <h5>786-8749988</h5>
        </div>
      </div>
    </>
  );
};

export default SideBar;
