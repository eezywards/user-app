import React, { useContext } from 'react';
import {QRCodeSVG} from 'qrcode.react';
import '../css/main.css';
import '../css/dashboard.css';

import UANavbar from '../components/UserAppNav';

import { DataContext } from "../context/DataContext";

function Dashboard() {

	const { account } = useContext(DataContext);

	const formatAddress = (address) => {
		console.log(address);
		return address.substring(0, 4) + "..." + address.substring(38);
	}

	return (
		<main id="dashboard">
			<UANavbar />
			<header>
				<div className="name"><span className="texts-l">{formatAddress(account[0])}</span><img src="" /></div>
				<QRCodeSVG className="qr-code" value={account[0]} height={160} width={160}/>,
				<p className="texts-lg">Scan QR at establishment to make purchase.</p>
			</header>
			<section id="content">
				<div className="container">
					<div className="row">
					  <div className="col-12 col-md-4 cards">
					    <div className="row">
					      <div className="col-9 image image-collection">
					        <p className="texts-xl">Collection<br /><span className="sp">& Achievements</span></p>
					      </div>
					      <div className="col-3 caption">
					        <p className="texts-sm">Your NFT collection with real life rewards and achievements</p>
					        <a href="/collections" className="btn-type-1">Check collections<img src="img/icons/arrow.svg" /></a>
					      </div>
					    </div>
					  </div>
					  <div className="col-12 col-md-4 cards disabled">
					    <div className="row">
					      <div className="col-9 image image-coupons">
					        <p className="texts-xl">Coupons</p>
					      </div>
					      <div className="col-3 caption">
					        <p className="texts-sm">Level up and recieve coupons for discounts and prizes</p>
					        <a className="btn-type-1">Coming soon<img src="img/icons/arrow.svg" /></a>
					      </div>
					    </div>
					  </div>
					  <div className="col-12 col-md-4 cards disabled">
					    <div className="row">
					      <div className="col-9 image image-rankings">
					        <p className="texts-xl">Rankings</p>
					      </div>
					      <div className="col-3 caption">
					        <p className="texts-sm">Compete against others to win amazing prizes</p>
					        <a className="btn-type-1" disabled>Coming soon<img src="img/icons/arrow.svg" /></a>
					      </div>
					    </div>
					  </div>
					</div>
				</div>
			</section>
		</main>
	);
}

export default Dashboard;