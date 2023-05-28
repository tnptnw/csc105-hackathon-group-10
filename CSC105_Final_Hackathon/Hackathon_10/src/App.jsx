import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./Pages/Login.jsx";
import RegisterUsers from "./Pages/RegisterUsers.jsx";
import RegisterGuard from "./Pages/RegisterGuard.jsx";
import RegisterEmployee from "./Pages/RegisterEmployee.jsx";
import { Box } from "@mui/material";
import { Home } from "./Pages/Home";
import { ProfileGuard } from "./Pages/ProfileGuard";
import Navbar from "./Pages/Navbar";
import Wait from "./Pages/Wait";
import Getjob from "./Pages/Getjob";
import { Result } from "./Pages/Result";
import ProfileEmployer from "./Pages/ProfileEmployer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./Pages/RegisterUsers.jsx";
import EditProfileB from './Pages/EditProfileB'
import EditProfileE from './Pages/EditProfileE'
import { PageNotFound } from "./Pages/PageNotFound";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/RegisterUsers" element={<RegisterUsers />}/>
          <Route path="/RegisterGuard" element={<RegisterGuard />}/>
          <Route path="/RegisterEmployer" element={<RegisterEmployee />}/>
          <Route path="/Home" element={<Home />}/>
          <Route path="/ProfileEmployer" element={<ProfileEmployer />}/>
          <Route path="/ProfileGuard" element={<ProfileGuard />}/>
          <Route path="/Result" element={<Result />}/>
          <Route path="/Wait" element={<Wait />}/>
          <Route path="/Getjob" element={<Getjob />}/>
          <Route path="/EditProfileB" element={<EditProfileB/>}/>
          <Route path="/EditProfileE" element={<EditProfileE/>}/>
          <Route path="*" element={<PageNotFound/>}/>
           
        </Routes>
      </BrowserRouter>
      {/* <Login></Login> */}
      {/* <RegisterUsers></RegisterUsers> */}
      {/* <RegisterGuard></RegisterGuard> */}
      {/* <RegisterEmployee></RegisterEmployee> */}
      {/* <Home></Home> */}
      {/* <ProfileGuard/> */}
      {/* <Navbar></Navbar> */}
      {/* <Wait/> */}
      {/* <Getjob></Getjob> */}
      {/* <Result></Result> */}
      {/* <ProfileEmployer/> */}
    </>
  );
}

export default App;
