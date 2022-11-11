import React, { useState } from "react";
import styles from "./verify.module.css";
import Knob from "../../../assets/screen.svg";
import Stox from "../../../assets/stox.svg";
import Button from "@mui/material/Button";
import OTPInput from "otp-input-react";
import ResendOTP from "./ResendOTP";
// import { useFormik } from 'formik';
import {useNavigate} from "react-router-dom";
//  import * as Yup from 'yup';
 import axios from 'axios';

const Verify = ({ userCode }) => {
  const [OTP, setOTP] = useState("");
  const navigate = useNavigate();
  const URL = process.env.REACT_APP_BASE_URL;
  const verifyOTP = async() => {
  
    try {
    await axios.post(`${URL}/login/forgot/check-otp`, {userCode: userCode, otp: OTP});
        navigate("/newpassword"); 
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className={styles.cards}>
      <div className={styles.card}>
        <div className={styles.card_sub1}>
          <img src={Stox} alt="stoxkart" height={42} />
        </div>
        <div className={styles.portal}>
          <h1>Verify OTP</h1>
          <p>Enter the OTP generated on sha********@gmail.com</p>
          <div className={styles.form}>
            <OTPInput
              value={OTP}
              onChange={setOTP}
              autoFocus
              OTPLength={6}
              otpType="number"
              placeholder={["-", "-", "-", "-", "-", "-"]}
            />
          </div>
       
           <ResendOTP/>
      
          <Button 
          onClick={verifyOTP}
          variant="contained" 
          sx={{background: "#0CA750", width: '100%', height: "3.625rem", marginTop: "30.36px"}}>
    Confirm Otp
    </Button>
        </div>
      </div>
      <div className={styles.card} style={{ background: "#EAF4FF" }}>
        <div className={styles.card_sub}>
          <img src={Knob} alt="portal" height={500} />
        </div>
      </div>
    </div>
  );
};

export default Verify;
