import React from 'react'
import Knob from "../../../assets/screen.svg"
import Stox from "../../../assets/stox.svg";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from "./Forget.module.css";
import { useFormik } from 'formik';
import {useNavigate} from "react-router-dom";
 import * as Yup from 'yup';
 import axios from 'axios';

const Password = ({ userCode, setUserCode }) => {
  const URL = process.env.REACT_APP_BASE_URL;
  const navigate= useNavigate();
  const formik = useFormik({
    initialValues: {
      userCode: '',
    },
    validationSchema: Yup.object({
      userCode: Yup.string()
        .max(8, 'Must be 8 characters')
        .required('Required'),
    }),
    onSubmit: async (values) => {
      try {
        await axios.post(`${URL}/login/forgot/send-otp`, values);
        setUserCode(values.userCode);
        navigate("/verify");
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <div className={styles.cards}>
    <div className={styles.card}>
        <div className={styles.card_sub1}>
          <img src={Stox} alt='stoxkart' height={42}/>
        </div>
        <div className={styles.portal}>
            <h1>Forgot Password?</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
    <form onSubmit={formik.handleSubmit}>
    <div className={styles.form}>
          <TextField 
           name="userCode" 
           label="Please Enter your ClientID"   
           inputProps={{ maxLength: 12 }}  
           sx={{borderRadius: "6px", width: "100%", color: "#A7A7A7", fontSize: "21px"}}
           onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.userCode}
           />
           {formik.touched.userCode && formik.errors.userCode ? (
         <div className={styles.login_error}>{formik.errors.userCode}</div>
       ) : null}
         
            <Button type="submit" variant="contained" sx={{background: "#0CA750", width: '100%', height: "3.625rem"}}>
        Send Otp
        </Button>
          </div>
          </form>
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

export default Password