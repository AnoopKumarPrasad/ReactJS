import logo from './logo.svg';
import './App.css';
import Welcome from './component/Welcome.js';
import Classcomponent from './component/Classcomponent';
import Passingprops from './component/Passingprops';
import NameList from'./component/NameList'
import Events from './component/Events'
import UseStatehook from './component/UseStatehook.js';
import Menu from './component/Menu.js'
import UseEffects from  './component/UseEffect.js'
import GetRequest from './component/GetRequest.js';
import PostReq from './component/PostReq.js';
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom';
import Home from './component/28May2024/Home.js';
import Profile from './component/28May2024/Profile.js';
import Contact from './component/28May2024/Contact.js';
function App() {
  return (
    <div className="App">
      {/* <Welcome/>
      <Classcomponent climate="hot" place="Thar"/>
      <Classcomponent climate="cool" place="Ooty"/>
      <Passingprops name="manu" value="programmer"/>
      <Passingprops name="Suraj" value="Tester"/> */}
      {/* <NameList/> */}
      {/* <Events/> */}
      {/* <UseStatehook/> */}
      {/* <Menu/> */}
      {/* <UseEffects/> */}
      {/* <GetRequest/> */}
      <PostReq/>
      {/* <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Home/>}> 
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        </Route>
      </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
