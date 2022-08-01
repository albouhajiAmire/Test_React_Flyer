import React from "react";
import "./topbar.css";
function TopBar() {
  return (
    <>
      <div className="main-content">
        <header>
          <h1>Data Table</h1>
          <div className="search-wrapper">
            <span className="las la-search">
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
            <input type="" placeholder="" />
            <i className="btnFilterCls fa-solid fa-xmark"></i>
          </div>
        </header>
        <hr />
      </div>
    </>
  );
}

export default TopBar;
