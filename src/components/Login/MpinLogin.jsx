import React, { useState } from 'react'
import styles from "./mpin.module.css"
import Knob from "../../assets/screen.svg"
import Stox from "../../assets/stox.svg";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useNavigate} from "react-router-dom";
 import axios from 'axios';
// import OTPInput from "otp-input-react";

//  import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded';


const MpinLogin = ({ cookies }) => {
  const [error, setError] = useState('');
  const [MPIN, setMPIN] = useState("");
  const URL = process.env.REACT_APP_BASE_URL;
const navigate= useNavigate();
const loginHandler = async() => {
  try {
    await axios.post(`${URL}/mpinlogin`, { userCode: cookies.userCode, mpin: MPIN});
    sessionStorage.setItem("userCode", cookies.userCode);
    navigate("/main");
    
  } catch (err) {
    setError(err.response.data.data.message);
  }
}

return (
<div className={styles.cards}>
<div className={styles.card}>
    <div className={styles.card_sub1}>
      <img src={Stox} alt='stoxkart' height={42}/>
    </div>
    <div className={styles.portalMpin}>
        <h1>Welcome to
Partner Portal!</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
 <div className='login_form'>
 <TextField 
        name="userCode" 
        id="outlined-basic" 
        label="Your Client ID"  
        sx={{borderRadius: "6px", width: "100%", color: "#A7A7A7", fontSize: "21px", marginTop: "20px"}}
        value={cookies.userCode}
        disabled
         />
          <TextField 
        type='password'
        id="outlined-basic" 
        label="Enter your MPIN"  
        sx={{borderRadius: "6px", width: "100%", color: "#A7A7A7", fontSize: "21px", marginTop: "30px"}}
        value={MPIN}
        onChange={(e)=>{setMPIN(e.target.value)}  }
         />
         {error ? <div className={styles.login_error}>{error}</div> : null}

 {/* <div className="otp_wrapper" style={{marginTop: 20}}>
 
            <OTPInput
              value={MPIN}
              onChange={ setMPIN }
              autoFocus
              OTPLength={4}
              otpType="number"
              disabled={false}
              placeholder={["-", "-", "-", "-", "-", "-"]}
            />
          </div>
         */}
          <Button 
          onClick={loginHandler} 
          variant="contained" 
          sx={{background: "#0CA750", width: '100%', height: "3.625rem", marginTop: "40px"}}>
      Login
      </Button>
      </div>

<h6>By Clicking, you agree our <span>&nbsp;Terms and Conditions</span> </h6>


    </div>
</div>
  <div className={styles.card} style={{background: "#EAF4FF"}}>
      <div className={styles.card_sub}>
      <img src={Knob} alt="portal" height={500}/>
  </div>
  </div>
</div>
  )
}

export default MpinLogin;