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