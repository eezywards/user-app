import React, { useState, useContext } from "react";

import { WorldIDWidget } from "@worldcoin/id";

import "../css/login.css";
import "../css/main.css";
import { NavLink, Router, Routes, Route } from "react-router-dom";

import { DataContext } from "../context/DataContext";

function Curegistration() {

    const { account, setAccount, isConnected, setIsConnected } = useContext(DataContext)
    const [email, setEmail] = useState('');
    const [isValidated, setIsValidated] = useState(false);

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
                </div>
                <div className="bcontainers">
                    <input class="form-control" type="text" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <WorldIDWidget
                    actionId="wid_staging_596c03ac5927bce7957ef868d1484240" // obtain this from developer.worldcoin.org
                    signal="my_signal"
                    enableTelemetry
                    onSuccess={(verificationResponse) => fetch("https://eezypos.azurewebsites.net/api/signUp", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            verificationResponse: verificationResponse,
                            email: email,
                            ethAddress: account[0]
                        })
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            setIsValidated(true);
                        })
                    }
                    onError={(error) => console.error(error)}
                />
                <div className="bcontainers">
                    <button disabled={!isValidated && !isConnected && email} class="button buttonl2">Sign Up</button>
                </div>
                <div className="bcontainers">
                    <NavLink to="/"><span class="text">Go back</span></NavLink>
                </div>
            </div>
            <div className="bottomlogin">
                <div>Already registered?</div>
                <NavLink to="/loginwallet"><span>Log in</span></NavLink>
            </div>
        </section>


    );
}

export default Curegistration;