import React, { useState } from "react";
import styles from "./mpin.module.css";
import Knob from "../../../assets/screen.svg";
import Stox from "../../../assets/stox.svg";
import Button from "@mui/material/Button";
import OTPInput from "otp-input-react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const Mpin = ({ userCode }) => {
  const [error, setError] = useState('');
  const [MPIN, setMPIN] = useState("");
  const URL = process.env.REACT_APP_BASE_URL;
  const navigate = useNavigate();

  const createMPIN = async() => {
  
    try {
    await axios.post(`${URL}/mpin`, {userCode: userCode, enteredMPIN: MPIN});
        navigate("/main"); 
    } catch (error) {
      setError(error.response.data.data.message);
    }
  }
  return (
    <div className={styles.cards}>
      <div className={styles.card}>
        <div className={styles.card_sub1}>
          <img src={Stox} alt="stoxkart" height={42} />
        </div>
        <div className={styles.portal}>
          <h1>Create MPIN</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          <div className={styles.otp}>
            <OTPInput
              value={MPIN}
              onChange={setMPIN}
              autoFocus
              OTPLength={4}
              otpType="number"
              disabled={false}
              placeholder={["-", "-", "-", "-"]}
            />
          </div>
          {error ? <div className={styles.login_error}>{error}</div> : null}
          <Button
          onClick={createMPIN}
            variant="contained"
            sx={{
              background: "#0CA750",
              width: "100%",
              height: "3.625rem",
              marginTop: "60px",
            }}
          >
            Confirm
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

export default Mpin;
