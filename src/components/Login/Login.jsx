import React, { useState } from 'react'
import styles from "./Login.module.css"
import Knob from "../../assets/screen.svg"
import Stox from "../../assets/stox.svg";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import InputAdornment from '@mui/material/InputAdornment';
import {useNavigate} from "react-router-dom";
import { useFormik } from 'formik';
 import * as Yup from 'yup';
 import axios from 'axios';
//  import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded';


const Login = ({ setCookie }) => {
  const [error, setError] = useState('');
  const URL = process.env.REACT_APP_BASE_URL;
  const navigate= useNavigate();
  const formik = useFormik({
    initialValues: {
      userCode: '',
      password: '',
    },
    validationSchema: Yup.object({
      userCode: Yup.string()
        .max(8, 'Must be 8 characters')
        .required('Required'),
        password: Yup.string()
        .max(8, 'Must be 8 characters or less')
        .required('Required')
    }),
    onSubmit: async (values) => {
      try {
        await axios.post(`${URL}/login`, values);
        setCookie('userCode', values.userCode, { path: '/' });
        sessionStorage.setItem("userCode", values.userCode);
        navigate("/main");
        
      } catch (err) {
        setError(err.response.data.data.message);
      }
    },
  });

  const handleClick = () => {
      navigate("/forget")
  };

  return (
      <div className={styles.cards}>
      <div className={styles.card}>
          <div className={styles.card_sub1}>
            <img src={Stox} alt='stoxkart' height={42}/>
          </div>
          <div className={styles.portal}>
          <form onSubmit={formik.handleSubmit}>
              <h1>Welcome to
      Partner Portal!</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      <div className='login_form'>
        <div className={styles.form}>
              <TextField 
              name="userCode" 
              id="outlined-basic" 
              label="Please Enter your Client ID"  
              sx={{borderRadius: "6px", width: "100%", color: "#A7A7A7", fontSize: "21px"}}
              onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.userCode}
              />
              {formik.touched.userCode && formik.errors.userCode ? (
                <div className={styles.login_error}>{formik.errors.userCode}</div>
              ) : null}
            <div className={styles.forget_span}>
              <span className={styles.forget} style={{width: '8em'}} onClick={handleClick}>Forgot Client ID?</span>
              </div>
            {}
              </div>
              <TextField 
              name="password" 
              type="password"
              id="outlined-basic" 
              label="Please Enter your Passsword"  
              sx={{borderRadius: "6px", width: "100%",color: "#A7A7A7", fontSize: "21px", marginTop: "25px"}} 
              // InputProps={{
              //   endAdornment: error ? <InputAdornment position="start"><ErrorRoundedIcon /></InputAdornment> : null,
              // }}
              onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {error ? <div className={styles.login_error}>{error}</div> : null}
              {formik.touched.password && formik.errors.password ? (
                <div className={styles.login_error}>{formik.errors.password}</div>
              ) : null}
                <Button 
                type="submit" 
                variant="contained" 
                sx={{background: "#0CA750", width: '100%', height: "3.625rem", marginTop: "40px"}}>
            Login
            </Button>
            </div> 

      <h6>By Clicking, you agree our <span>&nbsp;Terms and Conditions</span> </h6>
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

export default Login;