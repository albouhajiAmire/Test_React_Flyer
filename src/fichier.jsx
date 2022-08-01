// ----------------------------{ MT 1-}-----------------------------------
// useEffect(() => {
//   const fetchData = async () => {
//     const res = await axios.get("https://yfl-api.free.beeceptor.com/users");
//     setData(res.data);
//   };
//   fetchData();
// }, []);
// console.log("Api", data);
// ---------------------------{ MT 2 }-------------------------------------
// useEffect(() => {
//   getUsers();
// }, []);
// async function getUsers() {
//   const api = `https://yfl-api.free.beeceptor.com/users`;
//   const result = await fetch(api);
//   const getResult = await result.json();
//   setData(getResult);
//   console.log("resuuuuuuuuultApi", getResult);
//resuuuuuuuuultApi : Code d'état: 429 => réspense : 429 - Too Many Requests. Refer: https://beeceptor.com/pricing
// }
// -----------------------------------
// if (e.target.type === "checkbox" && !e.target.checked) {
//   setFormData({ ...formData, [e.target.name]: "" });
// } else {
//   setFormData({ ...formData, [e.target.name]: e.target.value });
// }

//   if (formData.name !== "") {
//   const filtered = dt.filter(employee => {
//     return employee.name.firstname === formData.name;
//   });
//   setData(filtered);
// }


// ---------------------------------
// if (formData.name !== "" ) {
//   const userFillters = [];
//   for (var i = 0; i < dt.length; i++) {
//     let text = dt[i].name.firstname.toLowerCase();
//     if (text.indexOf(formData.name.toLowerCase()) > -1) {
//       userFillters.push(dt[i]);
//     }
//   }
//   setData(userFillters);
// }


  // search :

  // const searchEmail = (e) => {
  //   if (e.target.value !== "") {
  //     const userFillters = [];
  //     for (var i = 0; i < dt.length; i++) {
  //       let text = dt[i].email.toLowerCase();
  //       if (text.indexOf(e.target.value.toLowerCase()) > -1) {
  //         userFillters.push(dt[i]);
  //       }
  //     }
  //     setData(userFillters);
  //   }
  // };
  // const searchRole = (e) => {
  //   if (e.target.value !== "") {
  //     const userFillters = [];
  //     for (var i = 0; i < dt.length; i++) {
  //       let text = dt[i].role.toLowerCase();
  //       if (text.indexOf(e.target.value.toLowerCase()) > -1) {
  //         userFillters.push(dt[i]);
  //       }
  //     }
  //     setData(userFillters);
  //   }
  // };
  // -----------------------------------------------------
  // function togglePreference(statu) {    
  //   checked[statu] = !checked[statu];    
  //   // Update animal likings 
  //   let newStatus = ""; 
  //   for ( var statu in checked ) { 
      
  //     if ( checked[statu] ) { 
        
  //       newStatus += statu + " "; 
        
  //     } 
      
  //   } 
  //   setChecked(newStatus); 
  //   console.log(newStatus);   
  // } 


// -------------------------------------------------------------------------
// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import "./table.css";
// function Table() {
  // const [users, setUsers] = useState([]);
  // const [loading, setLoading] = useState(false);

//   const [user, setUser] = useState([
//     {
//       id: "1",
//       name: { firstname: "Devon", lastname: "Lane" },
//       email: "tranthuy.nute@gmail.com",
//       status: "Busy",
//       role: "Bot Analyst",
//     },
//     {
//       id: "2", 
//       name: { firstname: "Darlene", lastname: "Robertson" },
//       email: "trungkienspktnd@gamail.com",
//       status: "Working",
//       role: "Bot Analyst",
//     },
//     {
//       id: "3",
//       name: { firstname: "Cody", lastname: "Fisher" },
//       email: "tienlapspktnd@gmail.com",
//       status: "Busy",
//       role: "Sales Manager",
//     },
//     {
//       id: "4",
//       name: { firstname: "Theresa", lastname: "Webb" },
//       email: "thuhang.nute@gmail.com",
//       status: "Free",
//       role: "Broadcaster",
//     },
//     {
//       id: "5",
//       name: { firstname: "Savannah", lastname: "Nguyen" },
//       email: "manhhachkt08@gmail.com",
//       status: "Working",
//       role: "Marketer",
//     },
//     {
//       id: "6",
//       name: { firstname: "Eleanor", lastname: "Pena" },
//       email: "vuhaithuongnute@gmail.com",
//       status: "On Vacation",
//       role: "Analytics Admin",
//     },
//     {
//       id: "7",
//       name: { firstname: "Jenny", lastname: "Wilson" },
//       email: "danghoang87hl@gmail.com",
//       status: "Busy",
//       role: "Bot Editor",
//     },
//     {
//       id: "8",
//       name: { firstname: "Marvin", lastname: "McKinney" },
//       email: "binhan628@gmail.com",
//       status: "Free",
//       role: "Team Editor",
//     },
//     {
//       id: "9",
//       name: { firstname: "Cameron", lastname: "Williamson" },
//       email: "ckctm12@gmail.com",
//       status: "Working",
//       role: "PPC Expert",
//     },
//     {
//       id: "10",
//       name: { firstname: "Jerome", lastname: "Bell" },
//       email: "nvt.isst.nute@gmail.com",
//       status: "Busy",
//       role: "Team Owner",
//     },
//   ]);
//   return (
//     <>
//       <div className="table-data table-striped">
//         <div className="order">
//           <table>
//             <thead>
//               <tr>
//                 <th>
//                   User <i className="fa-solid fa-caret-down"></i>
//                 </th>
//                 <th>
//                   Email <i className="fa-solid fa-caret-down"></i>
//                 </th>
//                 <th>
//                   Status <i className="fa-solid fa-caret-down"></i>
//                 </th>
//                 <th>
//                   Bot Analyst <i className="fa-solid fa-caret-down"></i>
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {user &&
//                 user.length > 0 &&
//                 user.map((user) => (
//                   <tr key={user.id}>
//                     <td>
//                       <img src="https://mdbootstrap.com/img/new/avatars/8.jpg"  alt="user"/>
//                       <p> {user.name.firstname } </p>
//                     </td>
//                     <td>{user.email}</td>
//                     <td>
//                       <span
//                         className="status"
//                         style={{
//                           color:
//                             (user.status === "Busy" && "#F63F3F") ||
//                             (user.status === "Free" && "#0064FF") ||
//                             (user.status === "Working" && "#404D61") ||
//                             (user.status === "On Vacation" && "#F9A348"),
//                         }}
//                       >
//                         {user.status}
//                       </span>
//                       {/* <span
//                         className={` "status" ${
//                           user.status === "Busy" ? "busy" : "status"
//                         } ${user.status === "Free" ? "free" : "status"} ${
//                           user.status === "Working" ? "working" : "status"
//                         }`}
//                       >
//                         {user.status}
//                       </span> */}
//                     </td>
//                     <td>{user.role}</td>
//                   </tr>
//                 ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Table;





// ---------------------FORM-----------------------------
import React, { useState } from "react";
import Users from "../table/Users";
import "./formFilter.css";
import { User } from "../../users.js";
import Cards from "../Card/Cards";
function FormFilter({ toggle }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
  });
  // ---------------------------------------------------------------
  const [dt, setData] = useState(User);
  // State with list of all checked item
  const [checked, setChecked] = useState([]);
  const checkList = ["Free", "Working", "On vacation", "Busy"];

  // Add/Remove checked item from list
  const handleCheck = (e) => {
   setFormData({...formData , [e.target.name]:e.target.checked ?  e.target.value : ""})
  };
  // Generate string of checked items
  const checkedItems = checked.length
    ? checked.reduce((total, item) => {
        return total + ", " + item;
      })
    : "";
  // Return classes based on whether item is checked
  var isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";

  const { name, email, role } = formData;
  const handleForm = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  console.log("ResultChecked",checkedItems);
  // -----------------------------------------------------------
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // ------------------------------------------------------------------
  // console.log(User[0]["email"]);
  // ----------------------{START SEARCH :}----------------------------------
  // ---------------------------{END SHEARCH}-----------------------------

//   const searchName = () => {
//     if (formData.name !== "" || formData.Free !== "" ) {
//       let filtered =
//       User.filter((usr) => {
//           return (
//             usr.name.firstname.toLowerCase() === formData.name.toLowerCase() ||
//             usr.name.lastname.toLowerCase() === formData.name ||
//             usr.email.toLowerCase() === formData.email ||
//             usr.status === formData.Free||
//             usr.status === formData.Working||
//             // usr.status.toLowerCase() === formData.On vacation||
//             usr.status.toLowerCase() === formData.Busy ||
//             usr.role === formData.role
//           );
//         });
//       setData(filtered);
//     }else{
//       setData(User);
//     }
//   };


//   console.log("formData",formData)
//   return (
//     <>
//       <div
//         className="formFilter active"
//         style={{
//           display: toggle ? "block" : "none",
//         }}
//       >
//         <form onSubmit={handleSubmit}>
//           <div className="inputfilter">
//             <input
//               className="inputName"
//               placeholder="Name"
//               type="text"
//               name="name"
//               value={name}
//               onChange={(e) => handleForm(e)}
//               // onKeyDown={searchName}
//             />
//             <input
//               className="inputEmail"
//               placeholder="Email"
//               type="email"
//               name="email"
//               value={email}
//               // onKeyDown={searchEmail}
//               onChange={(e) => handleForm(e)}
//             />
//           </div>
//           <br />
//           <div>
//             <span>Status</span>
//           </div>
//           <div className="chek">
//             {checkList &&
//               checkList.map((item, index) => (
//                 <div className="check" key={index}>
//                   <input
//                     className="checkbox"
//                     name={item}
//                     value={item}
//                     type="checkbox"
//                     onChange={handleCheck}
                 
//                   />
//                   <span className={isChecked(item)}>{item}</span>
//                 </div>
//               ))}
//             {/* <div>{`Items checked are: ${checkedItems}`}</div> */}
//           </div>
//           <div className="inputfilter">
//             <input
//               className="inputRole"
//               placeholder="Role"
//               type="text"
//               name="role"
//               value={role}
//               // onKeyDown={searchRole}
//               onChange={(e) => handleForm(e)}
//             />
//           </div>
//           <button className="btFilter" onClick={()=>searchName()} type="submit">
//             Filter
//           </button>
//         </form>
//       </div>
//       <Cards/>
//       <Users data={dt} />
//     </>
//   );
// }

// export default FormFilter;



// --------------------------------------------------
  // const searchName = () => {
  //   if (formData.name !== "" || formData.email !== "" || formData.role !== "" ||formData.status !== "") {
  //     let filtered = User.filter((usr) => {
  //       return (
  //         usr.name.firstname.toLowerCase() === formData.name.toLowerCase() ||
  //         usr.name.lastname.toLowerCase() === formData.name.toLowerCase() ||
  //         usr.email.toLowerCase() === formData.email.toLowerCase() ||
  //         usr.status === formData.Free ||
  //         usr.status === formData.Working.toLowerCase() ||
  //         usr.status === formData.Onvacation.toLowerCase() ||
  //         usr.status === formData.Busy||
  //         usr.role.toLowerCase() === formData.role.toLowerCase()
  //       );trungkienspktnd@gamail.com	
  //     });
  //     setData(filtered);
  //   } else {
  //     setData(User);
  //   }
  // };