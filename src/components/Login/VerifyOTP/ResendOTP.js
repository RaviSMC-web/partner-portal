import React, {useState} from "react";
import PropTypes from "prop-types";
import useResendOTP from "./hook/resendOTP";


function ResendOTP({ renderTime, renderButton, style, className,...props }) {


  const [error] = useState("");
  const { remainingTime, handelResendClick, timeUp} = useResendOTP(props);
 
const handleSubmit =() => {
    handelResendClick()
}


  
  return (
    <>
    <div className="styles">
    <div className="style_sub">
      <h6 className="did">Didn't receive the OTP?</h6>
      {!timeUp && (
        <button disabled={(remainingTime > 0)} onClick={handleSubmit}  type="button"  className={'resend_button_rem'} >
        Resend OTP
      </button>
      )}
     

     {timeUp && (
         <button disabled={(remainingTime > 0)}  onClick={handleSubmit} type="button"  className={'resend_button'} >
         Resend OTP
       </button>
     )}


     
        


      



      {!timeUp &&(<h3 className="heading3">in {remainingTime} sec</h3>)}  
       
       
    </div>

     <div className="center">
     <h5 className="errors">{error}</h5>
     </div>
     </div>
     </>
  );
}

ResendOTP.defaultProps = {
  maxTime: 20,
  timeInterval: 1000,
  style: {}
};

ResendOTP.propTypes = {
  onTimerComplete: PropTypes.func,
  onResendClick: PropTypes.func,
  renderTime: PropTypes.func,
  renderButton: PropTypes.func,
  maxTime: PropTypes.number,
  timeInterval: PropTypes.number,
  style: PropTypes.object,
  className: PropTypes.string
};

export default ResendOTP;