import React from "react";
import "./table.css";


function Users({data}) {

  return (
    <>
      <div className="table-data table-striped">
        <div className="order">
          <table>
            <thead>
              <tr>
                <th>
                  User <i className="fa-solid fa-caret-down"></i>
                </th>
                <th>
                  Email <i className="fa-solid fa-caret-down"></i>
                </th>
                <th>
                  Status <i className="fa-solid fa-caret-down"></i>
                </th>
                <th>
                  Bot Analyst <i className="fa-solid fa-caret-down"></i>
                </th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.length > 0 &&
                data.map((user) => (
                  <tr key={user.id}>
                    <td>
                      <img src="https://mdbootstrap.com/img/new/avatars/8.jpg"  alt="user"/>
                      <p> {user.name.lastname && user.name.firstname } </p>
                    </td>
                    <td>{user.email}</td>
                    <td> 
                      <span
                        className="status"
                        style={{
                          color:
                            (user.status === "Busy" && "#F63F3F") ||
                            (user.status === "Free" && "#0064FF") ||
                            (user.status === "Working" && "#404D61") ||
                            (user.status === "On Vacation" && "#F9A348"),
                        }}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td>{user.role}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Users;
