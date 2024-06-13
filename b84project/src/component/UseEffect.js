import React, {useState, useEffect} from "react";
function UseEffect(){
    const [count, setCount]=useState(0);
    useEffect(()=>{
        document.title='you clicked ${count} times';
        console.log(count);
},[])
return(
    <div>
        <p> you clicked {count} times </p>
        <button onClick={()=>setCount(count+1)}> Count Me </button>
    </div>
)
}
export default UseEffect;

//https://docs.google.com/spreadsheets/d/1A4tUakUqhhvyAE0QLiiV4wQtLTR5KvJ15802sWoQpX0/edit?authuser=1#gid=339379128