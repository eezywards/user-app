import React from 'react';
import ReactDOM from 'react-dom/client';
// import './main.css';
// import './style.css';
// import './home.css';

import App from './App';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import { DataProvider } from './context/DataContext';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
