import React, { useContext, useState, useEffect } from "react";

import "../css/login.css";
import "../css/main.css";
import { NavLink, Router, Routes, Route } from "react-router-dom";

import { DataContext } from "../context/DataContext";


function LoginWallet() {

    const { account, setAccount, isConnected, setIsConnected } = useContext(DataContext);

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
                    {isConnected ? (
                        <button disabled className="button buttonl4">Wallet connected</button>
                    ) : (
                        <button onClick={connectMetamask} class="button buttonl4">Connect wallet <img src="img/logo/metamask.svg" width={20} height={20} /></button>
                    )}
                    <div className="signin" style={{paddingTop: "10px"}}>
                        <NavLink to="/dashboard"><button disabled={!isConnected} className="button buttonl4" >Login</button></NavLink>
                    
                    </div>
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