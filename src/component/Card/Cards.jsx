import React from "react";
import Title from "../dashApp/Index";
import "./card.css";
function Cards() {
  return (
    <>
      {/* <Title /> */}
      <div className="cards">
        <div className="card-single">
          <div>
            <small>Total Budget</small>
            <span>
              <i className="fa-solid fa-caret-down"></i>
            </span>
            <h4>$85,125.00</h4>
          </div>
          <div>
            <span className="las la-users"> </span>
          </div>
        </div>
        <div className="card-single">
          <div>
            <small className="small">Monthly Budget</small>
            <span className="spanIcon">
              <i className="fa-solid fa-caret-down"></i>
            </span>
            <h4 className="h4">$85,125.00</h4>
          </div>
          <div>
            <span className="las la-users"> </span>
          </div>
        </div>
        <div className="card-single">
          <div>
            <small>Weekly Budget</small>
            <span className="weeklyIcon">
            <i className="fa-solid fa-sort-up"></i>
            </span>
            <h4>$85,125.00</h4>
          </div>
          <div>
            <span className="las la-users"> </span>
          </div>
        </div>
        <div className="card-single">
          <div>
            <small>Today Budget</small>
            <span className="todayIcon">
            <i className="fa-solid fa-sort-up"></i>
            </span>
            <h4>$85,125.00</h4>
          </div>
          <div>
            <span className="las la-users"> </span>
          </div>
        </div>
      </div> 
    </>
  );
}

export default Cards;
