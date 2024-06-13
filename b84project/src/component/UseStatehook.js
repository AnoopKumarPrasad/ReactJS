import React,{useState} from "react";
function UseStatehook() {
    const[count,setCount]=useState(0);
    return(
        <div>
            <p> youclicked {count} times </p>
            <button onClick={()=>setCount(count+1)}>Click Me</button>
        </div>
    )
}
export default UseStatehook;