import React from "react";
import "./sidebar.css";
function SideBar() {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-brand">
          <div className="user-wrapper">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
              alt=""
            />
            <div className="nameUser">
              <small>welcome back</small>
              <h4>Drax</h4>
            </div>
          </div>
        </div>

        <div className="sidebar-menu">
          <ul>
            <li>
              <a href="" className="active">
                <span className="las la-igloo">
                  <i className="fa-solid fa-magnifying-glass"></i>&ensp; Search
                </span>
                <span>
                  <i className="fa-solid fa-bars"></i>
                </span>
              </a>
            </li>
            <li>
              <a href="" className="">
                <span className="las la-igloo">
                  <i className="fa-solid fa-table"></i>&ensp; Data table
                </span>
                <span>
                  <i className="fa-solid fa-bars"></i>
                </span>
              </a>
            </li>
            <li>
              <a href="" className="">
                <span className="las la-igloo">
                  <i className="fa-solid fa-table-cells"></i>&ensp; Product
                </span>
                <span>
                  <i className="fa-solid fa-bars"></i>
                </span>
              </a>
            </li>
            <li>
              <a href="" className="">
                <span className="las la-igloo">
                  <i className="fa-solid fa-clipboard"></i>&ensp; Analytics
                </span>
                <span>
                  <i className="fa-solid fa-bars"></i>
                </span>
              </a>
            </li>
            <li>
              <a href="" className="">
                <span className="las la-igloo">
                  <i className="fa-solid fa-calendar"></i>&ensp; Calender
                </span>
                <span>
                  <i className="fa-solid fa-bars"></i>
                </span>
              </a>
            </li>
            <li>
              <a href="" className="">
                <span className="las la-igloo">
                  <i className="fa-solid fa-comment"></i>&ensp; Messenger
                </span>
                <span>
                  <i className="fa-solid fa-bars"></i>
                </span>
              </a>
            </li>
            <li>
              <a href="" className="">
                <span className="las la-igloo">
                  <i className="fa-brands fa-creative-commons"></i>&ensp; Crypto
                </span>
                <span>
                  <i className="fa-solid fa-bars"></i>
                </span>
              </a>
            </li>
            <li>
              <a href="" className="">
                <span className="las la-igloo">
                  <i className="fa-solid fa-power-off"></i>&ensp; Sign Out
                </span>
                <span>
                  <i className="fa-solid fa-bars"></i>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default SideBar;
