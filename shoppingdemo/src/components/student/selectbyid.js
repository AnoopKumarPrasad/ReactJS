import React, { useState } from "react";
import axios from "axios";
import Student from "./student";
import "./selectbyid.css";

function Selectbyid() {
  const [id, setId] = useState("");
  const [posts, setPosts] = useState([]);

  const handleFetchUser = (e) => {
    e.preventDefault();
    axios
      .get(`/students/${id}`)
      .then((res) => {
        setPosts([res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Student />
      <center>
        <h2 className="bgh2">Select By Id</h2>
      </center>
      <div className="back2">
        <div className="bg2">
        
          <form>
            <div className="form1">
              <input
                className="input1"
                type="text"
                placeholder="ENTER ID"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
              <button className="btn1" type="submit" onClick={handleFetchUser}>
                SELECT
              </button>
            </div>
          </form>
        </div>
        <div className="tab12">
        {posts.map((post) => (
          <table className="tab123">  
            <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>College</th>
                  <th>Roll</th>
                  <th>Qualification</th>
                  <th>Course</th>
                  <th>Year</th>
                  <th>Certificate</th>
                  <th>Hallticketno</th>
            </tr>
            <tr key={post.id}>
                    <td>{post.id}</td>
                    <td>{post.name}</td>
                    <td>{post.college}</td>
                    <td>{post.roll}</td>
                    <td>{post.qualification}</td>
                    <td>{post.course}</td>
                    <td>{post.year}</td>
                    <td>{post.certificate}</td>
                    <td>{post.hallticketno}</td>
            </tr>
          </table>
        ))}
</div>
      </div>
    </>
  );
}

export default Selectbyid;
