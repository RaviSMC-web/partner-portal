import React from 'react'
import styles from "./Forget.module.css"
import Knob from "../../../assets/screen.svg"
import Stox from "../../../assets/stox.svg";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Forget = () => {
  return (
<div className={styles.cards}>
<div className={styles.card}>
    <div className={styles.card_sub1}>
      <img src={Stox} alt='stoxkart' height={42}/>
    </div>
    <div className={styles.portal}>
        <h1>Forgot Client ID?</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
<div className={styles.form}>
      <TextField id="outlined-basic" label="Please Enter your Email"  sx={{borderRadius: "6px", width: "100%", color: "#A7A7A7", fontSize: "21px"}}/>
        <TextField id="outlined-basic" label="Please Enter your PAN"  sx={{borderRadius: "6px", width: "100%",color: "#A7A7A7", fontSize: "21px"}}/>
        <Button variant="contained" sx={{background: "#0CA750", width: '100%', height: "3.625rem"}}>
    Send Otp
    </Button>
      </div>

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

export default Forget