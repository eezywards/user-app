import React from 'react';

import Home from './pages/Home';

import UserApp from './pages/UserApp';
import Dashboard from './pages/Dashboard';
import Collection from './pages/Collection';
import Coupons from './pages/Coupons';

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
                
                <Route path="/userapp" element={ <UserApp /> } />
                <Route path="/dashboard" element={ <Dashboard /> } />
                <Route path="/collection" element={ <Collection /> } />
                <Route path="/coupons" element={ <Coupons /> } />

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
