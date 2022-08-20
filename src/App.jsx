
import './css/main.css';
import './css/home.css';



function App() {
  return (
    <main>
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
            <button className="btn-type-1 texts-l">Sign up</button>
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
          <p className="texts-l">Why Eezywards?</p>
          <p className="texts-xl">Securing rewards program through blockchain</p>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3 square">
              <div className="media-obj">
                <div className="list-decor"></div>
                <h5 className="texts-m mo-title">Unique identification and unrepeatable</h5>
              </div>
              <p className="texts-m mo-text">Stripe opera  optimizando todos los niveles de la pila financiera, desde integracion directas con las redes de las tarjetas y bancos hasta flujos de compra en el navegador.</p>
            </div>
            <div className="col-12 col-md-6 col-lg-3 square">
              <div className="media-obj">
                <div className="list-decor"></div>
                <h5 className="texts-m mo-title">Safe assets transfers</h5>
              </div>
              <p className="texts-m mo-text">Stripe opera  optimizando todos los niveles de la pila financiera, desde integracion directas con las redes de las tarjetas y bancos hasta flujos de compra en el navegador.</p>
            </div>
            <div className="col-12 col-md-6 col-lg-3 square">
              <div className="media-obj">
                <div className="list-decor"></div>
                <h5 className="texts-m mo-title">Non-transferable achievements</h5>
              </div>
              <p className="texts-m mo-text">Stripe opera  optimizando todos los niveles de la pila financiera, desde integracion directas con las redes de las tarjetas y bancos hasta flujos de compra en el navegador.</p>
            </div>
            <div className="col-12 col-md-6 col-lg-3 square">
              <div className="media-obj">
                <div className="list-decor"></div>
                <h5 className="texts-m mo-title">Loyalty coupons</h5>
              </div>
              <p className="texts-m mo-text">Stripe opera  optimizando todos los niveles de la pila financiera, desde integracion directas con las redes de las tarjetas y bancos hasta flujos de compra en el navegador.</p>
            </div>
          </div>
        </div>
      </section>
      {/*Use it your way*/}
      <section id="useit">
        <div className="container">
          <p className="texts-l">Use it your way</p>
          <p className="texts-xl">Ease of use for buyers and customers</p>
          <div className="row">
            <div className="col-12 col-md-6 cards">
              <div className="row">
                <div className="col-9 image image-seller">
                  <p className="texts-xl">Seller</p>
                </div>
                <div className="col-3 caption">
                  <p className="texts-s">Pay with ease with a QR code, earn loyalty achievements and redeemable coupons.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 cards">
              <div className="row">
                <div className="col-9 image image-customer">
                  <p className="texts-xl">Customer</p>
                </div>
                <div className="col-3 caption">
                  <p className="texts-s">Set up your payment station in order to reward loyal customers through Web3 gifts.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

  );
}

export default App;
