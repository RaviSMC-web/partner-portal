import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import MainFile from "./components/360View/MainFile";
import Main from "./Main";
import './App.css'
import Login from "./components/Login/Login";
import Forget from "./components/Login/ForgetClientId/Forget";
import Verify from "./components/Login/VerifyOTP/Verify";
import Password from "./components/Login/ForgetPassword/Password";
import CreatePassword from "./components/Login/CreatePassword/CreatePassword";
import NewPassword from "./components/Login/NewPassword/NewPassword";
import Mpin from "./components/Login/MPIN/Mpin";
import { useCookies } from 'react-cookie';
import MpinLogin from "./components/Login/MpinLogin";


const App = () => {
  const [userCode, setUserCode] = useState('')
  const [cookies, setCookie] = useCookies(['user']);
    

  return (
    <>
    <Routes>
        <Route path="/" element={cookies.userCode ? <MpinLogin cookies={cookies} /> : <Login setCookie={setCookie} />  }/> 
        <Route path="/main" element={<Main />} />
        <Route path="/360view" element={<MainFile />} />
        <Route path="/forget" element={<Forget/>}/>
        <Route path="/verify" element={<Verify userCode={userCode} setUserCode={setUserCode} />}/>
        <Route path="/reset" element={<Password userCode={userCode} setUserCode={setUserCode} />}/>
        <Route path="/password" element={<CreatePassword/>}/>
        <Route path="/newpassword" element={<NewPassword userCode={userCode} />}/>
        <Route path="/mpin" element={<Mpin userCode={userCode} />}/>
   </Routes>
    </>
  );
};

export default App;
