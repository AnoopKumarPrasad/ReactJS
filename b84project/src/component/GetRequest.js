import React, { useState, useEffect} from "react";
import axios from "axios";
import cors from 'cors';
function GetRequest()
{
    const[posts,setPosts]=useState([0]) //create a new state variable posts
    useEffect(()=>{
        axios.get('/students')
        //https://jsonplaceholder.typicode.com/posts
        //store the data in the variable by name res
        .then(res=>{
            console.log(res)
            setPosts(res.data) //use to update the data
        })
        .catch(err=>{
            console.log(err)
        })
    },[]) //dependency array

    //return list of item where key is post.id
    return(
        <div>
            <ul>
                {
               posts.map((x)=>(<li key={x.id}> {x.name}</li>)) //return list of item where key is posts.id
                }
            </ul>
        </div>
    );
   
}
export default GetRequest;