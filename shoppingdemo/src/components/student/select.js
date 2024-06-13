import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Student from "./student";
import "./select.css";

function Select() {
  const [select, setSelect] = useState([0]);

  useEffect(() => {
    axios.get('/students')
      .then((res) => {
        console.log(res);
        setSelect(res.data);
      })
      .catch((err) => {
        console.error("failed", err);
      });
  }, []);

  return (
    <>
      <Student />
      <div>
        <div>
          <center>
            <h2 className="bgh2"> Student Details</h2>
            <div className="tab1">
              <table className="tab">
                <tr >
                  <th>Id</th>
                  <th>Name</th>
                  <th>College</th>
                  <th>Roll No</th>
                  <th>Qualification</th>
                  <th>Course</th>
                  <th>Year</th>
                  <th>Certificate</th>
                  <th>Hallticketno</th>
                </tr>
                {select.map((items) => (
                  <tr key={items.id} >
                    <td>{items.id}</td>
                    <td>{items.name}</td>
                    <td>{items.college}</td>
                    <td>{items.roll}</td>
                    <td>{items.qualification}</td>
                    <td>{items.course}</td>
                    <td>{items.year}</td>
                    <td>{items.certificate}</td>
                    <td>{items.hallticketno}</td>
                  </tr>
                ))}
              </table>
            </div>
          </center>
        </div>
      </div>
    </>
  );
}
export default Select;
