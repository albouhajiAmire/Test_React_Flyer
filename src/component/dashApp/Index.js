import React, { useState, useEffect } from "react";
import "./index.css";
import Users from "../table/Users";
import "../../assets/css/formFilter.css";
import { User } from "../../users.js";
import Cards from "../Card/Cards";
function Index() {
  const [show, setShow] = useState(false);
  const clickToggle = () => {
    setShow(!show);
  };
  //---------------------------------------------------------------------------------
  const [dt, setData] = useState(User);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    //State with list of all checked item :
    status: {
      checkList: [
        { value: "Free", label: "Free" },
        { value: "Working", label: "Working" },
        { value: "OnVacation", label: "OnVacation" },
        { value: "Busy", label: "Busy" },
      ],
    },
  //   status: {
  //  checkList : ["Free", "Working", "On vacation", "Busy"]
  //   }
  });
  const { name, email, status, role } = formData;

  //---------------------------------{START handleForm}-----------------------------
  const handleForm = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  //---------------------------------{END handleForm}--------------------------------

  //---------------------------------{START HandleCheck}-----------------------------
  // Add/Remove checked item from listHandleSubmit
  const handleCheck = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.checked ? e.target.value : "",
    });
  };
  //---------------------------------{END HandleCheck}-------------------------------
  //---------------------------------{START HandleSubmit}----------------------------
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  //---------------------------------{END HandleSubmit}------------------------------
  //-----------------------------------{START SEARCH :}------------------------------
    const searchName = () => {
        if (formData.name !== "" || formData.status !== "" || formData.role !== ""|| formData.email !== "" ) {
          let filtered =
          User.filter((usr) => {
              return (
                usr.name.firstname.toLowerCase() === formData.name.toLowerCase() ||
                usr.name.lastname.toLowerCase() === formData.name.toLowerCase() || 
                usr.email.toLowerCase() === formData.email.toLowerCase() ||
                usr.status === formData.Free ||
                usr.status === formData.Working||
                usr.status === formData.OnVacation||
                usr.status === formData.Busy ||
                usr.role.toLowerCase() === formData.role.toLowerCase()
              );
            });
          setData(filtered);
        }else{
          setData(User);
        }
      };
  console.log(formData);

    //---------------------------------{START ResetData}-------------------------------
    const resetData = () => {
      setFormData({ name: "", email: "", role: "" ,status:""});
      setData(User);
    };
    // useEffect(() => {
    //   resetData()
    // }, []);
    useEffect(() => {
      if (
        formData.name === "" &&
        formData.email === "" &&
        formData.status === "" &&
        formData.role === ""
      ) {
        setData(User);
      }
    }, [formData]);
    //-----------------------------------{End ResetData}-------------------------------
  //---------------------------------{END SHEARCH}-----------------------------------
  return (
    <>
      <div className="head">
        <div className="titleDash">
          <h2>Employee</h2>
          <span>18 results found</span>
        </div>
        <div className="filter-wrapper">
          <button
            type="submit"
            className="btnFilterClose"
            onClick={() => resetData()}
          >
            <div className="filter_fr">
              <strong>Name :</strong>
              <span>{formData.name}</span>
            </div>
            <i className="fa-solid fa-xmark"></i>
          </button>
          &nbsp;
          <button type="submit" className="btnFilterOpen" onClick={clickToggle}>
            <i className="fa-solid fa-filter"></i>
          </button>
        </div>
      </div>
      <div
        className="formFilter active"
        style={{
          display: show ? "block" : "none",
        }}
      >
        <form onSubmit={handleSubmit}>
          <div className="inputfilter">
            <input
              className="inputName"
              placeholder="Name"
              type="text"
              name="name"
              value={name}
              onChange={(e) => handleForm(e)}
              // onKeyDown={searchName}
            />
            <input
              className="inputEmail"
              placeholder="Email"
              type="email"
              name="email"
              value={email}
              // onKeyDown={searchEmail}
              onChange={(e) => handleForm(e)}
            />
          </div>
          <br />
          <div>
            <span>Status</span>
          </div>
          <div className="chek">
            {status.checkList &&
              status.checkList.map((item, index) => (
                <div className="check" key={index}>
                  <input
                    className="checkbox"
                    name={item.label}
                    value={item.value}
                    type="checkbox"
                    onChange={handleCheck}
                  />
                  <span>{item.label}</span>
                </div>
              ))}
            {/* <div>{`Items checked are: ${checkedItems}`}</div> */}
          </div>
          <div className="inputfilter">
            <input
              className="inputRole"
              placeholder="Role"
              type="text"
              name="role"
              value={role}
              // onKeyDown={searchRole}
              onChange={(e) => handleForm(e)}
            />
          </div>
          <button
            className="btFilter"
            onClick={() => searchName()}
            type="submit"
          >
            Filter
          </button>
        </form>
      </div>
      <Cards />
      <Users data={dt} />
    </>
  );
}

export default Index;
