import React, {useState} from 'react'
import styles from "./create.module.css";
import Knob from "../../../assets/screen.svg"
import Stox from "../../../assets/stox.svg";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import PasswordChecklist from "react-password-checklist"

const CreatePassword = () => {
    const [password, setPassword] = useState("")



    


  return (
    <div className={styles.cards}>
    <div className={styles.card}>
        <div className={styles.card_sub1}>
          <img src={Stox} alt='stoxkart' height={42}/>
        </div>
        <div className={styles.portal}>
  <h1>Create Password</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
    <div className={styles.form}>
          <TextField id="outlined-basic" label="New Password" onChange={e => setPassword(e.target.value)}   sx={{borderRadius: "6px", width: "100%", color: "#A7A7A7", fontSize: "21px"}}/>
          <PasswordChecklist
				rules={["minLength","specialChar","number","capital"]}
				minLength={8}
				value={password}
				messages={{
					minLength: "1.Password should be 6-8 characters.",
					specialChar: "2. Uppercase + Lowercase letters.",
					number: "3. A mixture of letters and numbers.",
					capital: "4. At least one special charecter.",
					
				}}
			/>
         
          </div>
          <div className={styles.password_main}>
          <span className={styles.password}>Forgot Password?</span>
          </div>
         
            <Button variant="contained" sx={{background: "#0CA750", width: '100%', height: "3.625rem"}}>
       Login
        </Button>
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

export default CreatePassword