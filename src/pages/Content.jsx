import '../css/main.css';
import '../css/home.css';
import LoginWallet from '../pages/loginwallet';
import { NavLink, Router, Routes, Route } from "react-router-dom";


function Content() {
  return (
    <main id="home">
      <header>
        <div className="blue-stripe"></div>
        <div className="container">
          <div className="top-items">
            <p className="texts-t1">
              The future of rewards system
            </p>
            <p className="texts-t2">
              Decentralized coupons and rewards center bridging Web3 and Web2.
            </p>
            <NavLink to="/login-mobile" ><button className="btn-type-1 texts-l">Launch App</button></NavLink>
          </div>
          <div className="bottom-items">
            <ul className="network-logos">
              {/*Worldcoin*/}
              <li>
                <a href="https://worldcoin.org/" target="_blank">
                  <img src="./img/logo/worldcoin-logo-blue.png" />
                </a>
              </li>
              {/*Polygon*/}
              <li>
                <a href="https://polygon.technology/sustainability/" target="_blank">
                  <img src="./img/logo/polygon-logo-blue.png" />
                </a>
              </li>
              {/*IPFS*/}
              <li>
                <a href="https://ipfs.tech/" target="_blank">
                  <img src="./img/logo/ipfs-logo-blue.png" />
                </a>
              </li>
              {/*Wallet Connect*/}
              <li>
                <a href="https://walletconnect.com/" target="_blank">
                  <img src="./img/logo/walletconnect-logo-blue.png" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      {/*Why Eezywards*/}
      <section id="why">
        <hr />
        <div className="container">
          <p className="texts-lg azul">Why Eezywards?</p>
          <p className="texts-xl">Securing rewards program through blockchain</p>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3 square">
              <div className="media-obj">
                <div className="list-decor"></div>
                <h5 className="texts-m mo-title">Unique identification and unrepeatable</h5>
              </div>
              <p className="texts-m mo-text">Thanks to WorldCoin verification process we make sure that every login is made in the safest way possible.</p>
            </div>
            <div className="col-12 col-md-6 col-lg-3 square">
              <div className="media-obj">
                <div className="list-decor"></div>
                <h5 className="texts-m mo-title">Safe assets transfers</h5>
              </div>
              <p className="texts-m mo-text">By using Polygon's we make sure to use te best option within the ETH ecosystem to transfer assets in the safest and fastest way. Also assuring to bring people form web 2 into web 3.</p>
            </div>
            <div className="col-12 col-md-6 col-lg-3 square">
              <div className="media-obj">
                <div className="list-decor"></div>
                <h5 className="texts-m mo-title">Non-transferable achievements</h5>
              </div>
              <p className="texts-m mo-text">By making non-transferable the achievements we ensure to make each goal personal and fair for all the community.</p>
            </div>
            <div className="col-12 col-md-6 col-lg-3 square">
              <div className="media-obj">
                <div className="list-decor"></div>
                <h5 className="texts-m mo-title">Loyalty coupons</h5>
              </div>
              <p className="texts-m mo-text">The more you buy, the more you earn. Each buy increases the chances of getting a cupon.</p>
            </div>
          </div>
        </div>
      </section>
      {/*Use it your way*/}
      <section id="useit">
        <div className="container">
          <p className="texts-lg azul"><center>Use it your way</center></p>
          <p className="texts-xl">Ease of use for buyers and customers</p>
          <div className="row">
            <div className="col-12 col-md-6 cards">
              <div className="row">
                <div className="col-9 image image-seller">
                  <p className="texts-xl">Seller</p>
                </div>
                <div className="col-3 caption">
                  <p className="texts-sm">Pay with ease with a QR code, earn loyalty achievements and redeemable coupons.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 cards">
              <div className="row">
                <div className="col-9 image image-customer">
                  <p className="texts-xl">Customer</p>
                </div>
                <div className="col-3 caption">
                  <p className="texts-sm justify">Set up your payment station in order to reward loyal customers through Web3 gifts.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

  );
}

export default Content;
