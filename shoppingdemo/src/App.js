import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/navbar/nav";
import Student from "./components/student/student";
import Update from "./components/student/update";
import Select from "./components/student/select";
import Insert from "./components/student/insert";
import Delete from "./components/student/delete";
import Selectbyid from "./components/student/selectbyid";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Nav />}>
              <Route path="/student" element={<Student />} />
              <Route path="/update" element={<Update />} />
              <Route path="/select" element={<Select />} />
              <Route path="/insert" element={<Insert />} />
              <Route path="/delete" element={<Delete />} />
              <Route path="/selectbyid" element={<Selectbyid />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
