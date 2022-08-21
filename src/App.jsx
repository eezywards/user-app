import React from 'react';

import Home from './pages/Home';
import UserApp from './pages/UserApp';
import Dashboard from './pages/Dashboard';
import Collection from './pages/Collection';
import Coupons from './pages/Coupons';
// import Login from './pages/Login';
// import Signup from './pages/Signup';

import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



function App() {
  return (
    <Router>
            <Routes>
                <Route path="/" element={ <Home /> } />
                {/*<Route path="/login" element={ <Login /> } />
                <Route path="/signup" element={ <Signup /> } />*/}

                <Route path="/userapp" element={ <UserApp /> } />
                <Route path="/dashboard" element={ <Dashboard /> } />
                <Route path="/collection" element={ <Collection /> } />
                <Route path="/coupons" element={ <Coupons /> } />
            </Routes>
           
    </Router>

  );
}

export default App;
