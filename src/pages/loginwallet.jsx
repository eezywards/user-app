import "../css/login.css";
import "../css/main.css";
import { NavLink, Router, Routes, Route } from "react-router-dom";

function LoginWallet() {
    return (
    <section className="allsection">
        <div className="logos">
            <center><img src="img/logo/eezywards-logo.svg"/></center>
            <div className="bcontainers">
                <button class="button buttonl2">Log in with wallet</button>
            </div>
            <div className="bcontainers">
            <NavLink to="/"><span class="text">Go back</span></NavLink>
            </div>
        </div>
        <div className="bottomlogin">
        <div>Don't have an account?</div>
        <NavLink to="/signup"><span>Sign Up</span></NavLink>
        </div>
    </section>
      
  
    );
  }

  export default LoginWallet;