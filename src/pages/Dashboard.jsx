import '../css/main.css';
import '../css/dashboard.css';

import UANavbar from '../components/UserAppNav';

function Dashboard() {
	return (
		<main id="dashboard">
			<UANavbar />
			<header>
				<div className="name"><span className="texts-l">0xE9...cdE9</span><img src="" /></div>
				<img src="img/qrcode.png" className="qr-code" />
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
					  <div className="col-12 col-md-4 cards">
					    <div className="row">
					      <div className="col-9 image image-coupons">
					        <p className="texts-xl">Coupons</p>
					      </div>
					      <div className="col-3 caption">
					        <p className="texts-sm">Level up and recieve coupons for discounts and prizes</p>
					        <a href="/coupons" className="btn-type-1">Check coupons<img src="img/icons/arrow.svg" /></a>
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