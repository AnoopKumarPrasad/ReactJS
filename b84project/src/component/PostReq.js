import React, { useState, useEffect} from "react";
import axios from "axios";

function PostReq() {
    const [userid, setUserid] = useState("");
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [post,setPosts]=useState("");
 
    const obj = {
        userid: "",
        title: "",
        body: "",
      };
      const handleSubmit = (e) => {
        e.preventDefault();// to avoid page refresh
        const obj = {
          userid:  userid,
          title: title,
          body: body,
          
        };
        console.log(obj);
    }
    useEffect(()=>{
        axios.post('https://jsonplaceholder.typicode.com/posts',obj)
        //store the data in the variable by name res
        .then(res=>{
            console.log(res)
           setPosts(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])
    return (
        <div>
          <form>
            <div>
          <input type="text" name="userid" value={userid}
                onChange={(e) => setUserid(e.target.value)} />
 
            </div>
            <div>
              <input
                type="text"
                name="tittle"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                name="body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
              />
            </div>
          </form>
    
          <button type="submit" onClick={handleSubmit}>submit</button>
          </div>    
    );
}
export default PostReq;