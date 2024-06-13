import React, { useState } from "react";
import axios from "axios";
import Student from "./student";
import './update.css'

function Update() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [college, setCollege] = useState("");
  const [roll, setRoll] = useState("");
  const [qualification, SetQualification] = useState("");
  const [course, setCourse] = useState("");
  const [year, setYear] = useState("");
  const [certificate, setCertificate] = useState("");
  const [hallticketno, setHallticketno] = useState("");
  // const [post,setPosts]=useState("");

  const submit = (e) => {
    e.preventDefault();
    const obj = {
      id: id,
      name: name,
      college : college,
      roll: roll,
      qualification : qualification,
      course : course,
      year : year,
      certificate : certificate,
      hallticketno : hallticketno,
    };
    axios.put(`/students/${id}`, obj)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Student />
      <center>
        <h2 className="bgh2">Update Student Details</h2>
      </center>
      <div className="container">
        <form>
        <div className="form">
            <input
            className="input"
              type="number"
              placeholder="Id"
              name="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <input
            className="input"
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
            className="input"
              type="text"
              placeholder="college"
              name="college"
              value={college}
              onChange={(e) => setCollege(e.target.value)}
            />
            <input
            className="input"
              type="number"
              placeholder="roll"
              name="roll"
              value={roll}
              onChange={(e) => setRoll(e.target.value)}
            />
            <input
              className="input"
              type="text"
              placeholder="qualification"
              name="qualification"
              value={qualification}
              onChange={(e) => SetQualification(e.target.value)}
            />
             <input
            className="input"
              type="text"
              placeholder="course"
              name="course"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            /> <input
            className="input"
              type="number"
              placeholder="year"
              name="year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            /> <input
            className="input"
              type="text"
              placeholder="certificate"
              name="certificate"
              value={certificate}
              onChange={(e) => setCertificate(e.target.value)}
            /> <input
            className="input"
              type="number"
              placeholder="hallticketno"
              name="hallticketno"
              value={hallticketno}
              onChange={(e) => setHallticketno(e.target.value)}
            />
            <button type="submit" className="btn" onClick={submit}>
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Update;
