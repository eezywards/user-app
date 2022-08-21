import React, { useContext, useState, useEffect } from "react";

import "../css/login.css";
import "../css/main.css";
import { NavLink, Router, Routes, Route } from "react-router-dom";

import { DataContext } from "../context/DataContext";


function LoginWallet() {

    const { account, setAccount, setIsConnected } = useContext(DataContext);

    const connectMetamask = async () => {
        if (window.ethereum) {
            try {
                await window.ethereum.request({ method: "eth_requestAccounts" });
                console.log("Connected to Ethereum");
                setAccount(await window.ethereum.enable());
                setIsConnected(true);
            } catch (error) {
                console.log("User denied account access");
                setIsConnected(false);
            }
        }
    };

    const getUser = async () => {
        const response = await fetch("https://eezypos.azurewebsites.net/api/getUser?ethAddress=" + account[0]);
        const data = await response.json();
        console.log(data);
    }

    return (
        <section className="allsection">
            <div className="logos">
                <center><img src="img/logo/eezywards-logo.svg" /></center>
                <div className="bcontainers">
                    <button onClick={connectMetamask} class="button buttonl2">Log in with wallet</button>
                </div>
                <div className="bcontainers">
                    <NavLink to="/"><span class="text">Go back</span></NavLink>
                </div>
            </div>
            <div className="bottomlogin">
                <div>Don't have an account?</div>
                <NavLink to="/signup"><span>Sign Up</span></NavLink>
            </div>
        </section>


    );
}

export default LoginWallet;