import "../css/login.css";
import "../css/main.css";
import { NavLink, Router, Routes, Route } from "react-router-dom";

function Login() {
    return (
    <section className="allsection">
        <div className="logos">
            <img src="img/logo/eezywards-logo.svg"/>
            <div className="bcontainers">
                <button class="button button1">Log in</button>
            </div>
            <div className="bcontainers">
                <button class="button button2">Sign up</button>
            </div>
            <div className="bcontainers">
            <NavLink to="/"><span class="text">Go back</span></NavLink>
            </div>
        </div>
    </section>
      
  
    );
  }

  export default Login;
