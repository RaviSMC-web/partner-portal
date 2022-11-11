import React, {useState} from 'react'
import styles from "./newpassword.module.css"
import Knob from "../../../assets/screen.svg"
import Stox from "../../../assets/stox.svg";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useNavigate} from "react-router-dom";
import { useFormik } from 'formik';
 import * as Yup from 'yup';
 import axios from 'axios';

const NewPassword = ({ userCode }) => {
  const [error, setError] = useState('');
  const URL = process.env.REACT_APP_BASE_URL;
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      userCode: 'code15',
      newPassword: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      newPassword: Yup.string()
        .max(8, 'Must be 8 characters')
        .required('Required'),
        confirmPassword: Yup.string()
        .max(8, 'Must be 8 characters or less')
        .required('Required')
    }),
    onSubmit: async (values) => {
      try {
        await axios.post(`${URL}/login/forgot-password`, values);
        navigate("/mpin");
        alert('password reset successfully')
      } catch (error) {
        setError(error.response.data.data.message);
      }
    },
  });
  return (
<div className={styles.cards}>
<div className={styles.card}>
    <div className={styles.card_sub1}>
      <img src={Stox} alt='stoxkart' height={42}/>
    </div>
    <form onSubmit={formik.handleSubmit}>
    <div className={styles.portal}>
        <h1>Create Password</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
<div className={styles.form}>
      <TextField 
      name='newPassword'
      id="outlined-basic" 
      label="New Password"  
      sx={{borderRadius: "6px", width: "100%", color: "#A7A7A7", fontSize: "21px"}}
      onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.newPassword}
      />
       {formik.touched.newPassword && formik.errors.newPassword ? (
         <div className={styles.login_error}>{formik.errors.newPassword}</div>
       ) : null}
      {/* <span className={styles.forget} onClick={handleClick}>Forgot Client ID?</span> */}
        <TextField 
        name='confirmPassword'
        id="outlined-basic" 
        label="Confirm Password"  
        sx={{borderRadius: "6px", width: "100%",color: "#A7A7A7", fontSize: "21px"}}
        onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.confirmPassword}
        />
        {error ? <div className={styles.login_error}>{error}</div> : null}
       {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
         <div className={styles.login_error}>{formik.errors.confirmPassword}</div>
       ) : null}
      </div>
      <div className={styles.password_main}>
          <span className={styles.password}>Forgot Password?</span>
          </div>
          <Button
           variant="contained" 
           sx={{background: "#0CA750", width: '100%', height: "3.625rem"}}
           type='submit'
           >
    Login
    </Button>
    </div>
    </form>
</div>
  <div className={styles.card} style={{background: "#EAF4FF"}}>
      <div className={styles.card_sub}>
      <img src={Knob} alt="portal" height={500}/>
  </div>
  </div>
</div>
  )
}

export default NewPassword