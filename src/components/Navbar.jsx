import React, { useContext } from "react";
import "../css/nav.css";
import "../css/main.css";
import "../pages/login-mobile";
import { NavLink, Router, Routes, Route } from "react-router-dom";

export default function Navbar() {
    return (
      <nav className="navigation">
        <NavLink to="/"><img className="logo-image" src="img/logo/eezywards-logo.svg"/>
        </NavLink>
        <div className="navigation-menu">
          <ul>
            <li>
              <NavLink to="/loginwallet"><button class="button button1">Log in</button></NavLink>
            </li>
            <li>
            <NavLink to="/signup"><button class="button button2">Sign Up</button></NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
  