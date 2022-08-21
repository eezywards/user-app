import "../css/login.css";
import "../css/main.css";
import { NavLink, Router, Routes, Route } from "react-router-dom";

function SignUp() {

    

    return (
    <section className="allsection">
        <div className="logos">
            <center><img src="img/logo/eezywards-logo.svg"/></center>
            <div className="bcontainers">
            <NavLink to="/customerRegistration"><button class="button buttonl3">I am a customer</button></NavLink>
            </div>
            <div className="bcontainers">
            <NavLink to="/vendor-registration"><button class="button buttonl2">I am a vendor</button></NavLink>
            </div>
            <div className="bcontainers">
            <NavLink to="/"><span class="text">Go back</span></NavLink>
            </div>
        </div>
        <div className="bottomlogin">
        <div>Already registered?</div>
        <NavLink to="/loginwallet"><span>Log in</span></NavLink>
        </div>
    </section>
      
  
    );
  }

  export default SignUp;