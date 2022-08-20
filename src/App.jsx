import React from 'react';

import Home from './pages/Home';
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
            </Routes>
           
    </Router>

  );
}

export default App;
