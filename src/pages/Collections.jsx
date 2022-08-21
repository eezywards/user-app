import '../css/main.css';
import '../css/dashboard.css';

import UANavbar from '../components/UserAppNav';



function Collections() {
	return (
		<main id="dashboard">
			<UANavbar />
			<section className="collection">
				<div className="container">
					<div className="row title-row">
						<div className="col-7">
							<p className="texts-xl">Collections</p>
						</div>
						<div className="col-5">
							<a href="/dashboard" className="texts-sm">Go back <img src="img/icons/back.svg" /> </a>
						</div>
					</div>
					<div id="nft-collections" className="row">
						{/**/}
						<div className="col-12 col-md-4 cards">
						  <div className="row">
						    <div className="col-9 image">
						      <p className="texts-xl">Starbucks</p>
						    </div>
						    <div className="col-3 caption">
						      <p className="texts-sm">Level up and recieve coupons for discounts and prizes</p>
						      <a href="/" className="btn-type-1">View more<img src="img/icons/arrow.svg" /></a>
						    </div>
						  </div>
						</div>
						{/**/}
						<div className="col-12 col-md-4 cards">
						  <div className="row">
						    <div className="col-9 image">
						      <p className="texts-xl">Starbucks</p>
						    </div>
						    <div className="col-3 caption">
						      <p className="texts-sm">Level up and recieve coupons for discounts and prizes</p>
						      <a href="/" className="btn-type-1">View more<img src="img/icons/arrow.svg" /></a>
						    </div>
						  </div>
						</div>
						<div className="col-12 col-md-4 cards">
						  <div className="row">
						    <div className="col-9 image">
						      <p className="texts-xl">Starbucks</p>
						    </div>
						    <div className="col-3 caption">
						      <p className="texts-sm">Level up and recieve coupons for discounts and prizes</p>
						      <a href="/" className="btn-type-1">View more<img src="img/icons/arrow.svg" /></a>
						    </div>
						  </div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}

export default Collections;