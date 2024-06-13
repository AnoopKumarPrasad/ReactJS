import React from 'react';
import {Link} from "react-router-dom";
const Home=()=>{
    return(
        <div>
            <li> <Link to="/Contact.js"> Contact </Link> </li>
            <li> <Link to="/Profile.js"> Profile </Link> </li>
        </div>
    )
}
export default Home;