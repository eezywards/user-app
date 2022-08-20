import React from 'react';

import Home from './pages/Home';
import Login from "./pages/login-mobile";
import LoginWallet from './pages/loginwallet';
// import Signup from './pages/Signup';

import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



function App() {
  return (
    <Router>
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/login-mobile" element={ <Login /> } />
                <Route path="/loginwallet" element={ <LoginWallet /> } />
            </Routes>
           
    </Router>

  );
}

export default App;
