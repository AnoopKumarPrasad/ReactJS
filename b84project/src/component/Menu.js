import React,{useState} from "react";
function Menu(){
    const[item, setItems]=useState([])
    const addItem=()=>{
        setItems([...item,{
            id:item.length,
            value:Math.floor(Math.random()*10)+1
        }])
    }
    return(
        <div>
            <button onClick={addItem}> Added a number </button>
            <ul> {
                item.map(item=>(
                    <li key={item.id} > {item.value} </li>
                    ))
                }
            </ul>
        </div>
        )
}
export default Menu;
//... is  a spread operator allows iteration on strings or arrays