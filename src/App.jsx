import React from 'react';

import Home from './pages/Home';
import Login from "./pages/login-mobile";
import LoginWallet from './pages/loginwallet';
import SignUp from './pages/signup';
import Curegistration from './pages/customerregistration';
import Vendregistration from './pages/vendor-registration';

import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



function App() {
  return (
    <Router>
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/login-mobile" element={ <Login /> } />
                <Route path="/loginwallet" element={ <LoginWallet /> } />
                <Route path="/signup" element={ <SignUp /> } />
                <Route path="/customerregistration" element={ <Curegistration /> } />
                <Route path="/vendor-registration" element={ <Vendregistration /> } />
            </Routes>
           
    </Router>

  );
}

export default App;
