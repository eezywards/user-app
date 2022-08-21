import "../css/login.css";
import "../css/main.css";
import { NavLink, Router, Routes, Route } from "react-router-dom";

function Vendregistration() {
    return (
    <section className="allsection">
        <div className="logos">
            <center><img src="img/logo/eezywards-logo.svg"/></center>
            <div className="bcontainers">
            <input class="form-control" type="text"  placeholder="Enter your company's name" />
            </div>
            <div className="bcontainers">
            <input class="form-control" type="text"  placeholder="Enter your mail" />
            </div>
            <div className="bcontainers">
                <button class="button buttonl2">Sign and connect</button>
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

  export default Vendregistration;