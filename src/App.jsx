
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
                <a href="" target="_blank">
                  <img src="./img/logo/worldcoin-logo-blue.png" />
                </a>
              </li>
              {/*Polygon*/}
              <li>
                <a href="" target="_blank">
                  <img src="./img/logo/polygon-logo-blue.png" />
                </a>
              </li>
              {/*IPFS*/}
              <li>
                <a href="" target="_blank">
                  <img src="./img/logo/ipfs-logo-blue.png" />
                </a>
              </li>
              {/*Wallet Connect*/}
              <li>
                <a href="" target="_blank">
                  <img src="./img/logo/walletconnect-logo-blue.png" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </main>

  );
}

export default App;
