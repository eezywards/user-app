import "../css/login.css";
import "../css/main.css";
import { NavLink, Router, Routes, Route } from "react-router-dom";

function Login() {
    return (
    <section className="allsection">
        <div className="logos">
            <img src="img/logo/eezywards-logo.svg"/>
            <div className="bcontainers">
            <NavLink to="/loginwallet"> <button class="button buttonl1">Log in</button></NavLink>
            </div>
            <div className="bcontainers">
            <NavLink to="/signup"><button class="button buttonl2">Sign up</button></NavLink>
            </div>
            <div className="bcontainers">
            <NavLink to="/"><span class="text">Go back</span></NavLink>
            </div>
        </div>
    </section>
      
  
    );
  }

  export default Login;
