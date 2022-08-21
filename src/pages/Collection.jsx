import '../css/main.css';
import '../css/dashboard.css';

import UANavbar from '../components/UserAppNav';

function Collection() {
	// var url = window.location.href;
	// const collectionName = url.search;
	// document.getElementById("collection-name").innerHTML = collectionName;
	// console.log(collectionName);

	return (
		<main id="dashboard">
			<UANavbar />
			<section className="collection">
				<div className="container">
					<div className="row title-row">
						<div className="col-7">
							<p id="collection-name" className="texts-xl">Pizza Planet #0 Placeholder</p>
						</div>
						<div className="col-5">
							<a href="/collections" className="texts-sm">Go back <img src="img/icons/back.svg" /> </a>
						</div>
					</div>
					<div className="nft-metadata">
						<div className="nft-img">
							<img src="img/bronze-nft.png" />
						</div>
						<div className="nft-achievements">
							<div className='row'>
								<div className='col-12 col-md-6'>
									<p className='texts-xl'>Achievements</p>
									<div className='row'>
										<div className="col-2">
										<img src="img/icons/achievement.svg" />
										</div>
										<div className='col-10'>
											<p className='texts-s'>
												Spend $20 dollars on the establishment
											</p>
										</div>
									</div>
									<div className='row'>
										<div className="col-2">
										<img src="img/icons/achievement.svg" />
										</div>
										<div className='col-10'>
											<p className='texts-s'>
												Spend $50 dollars on the establishment
											</p>
										</div>
									</div>
									<div className='row'>
										<div className="col-2">
										<img src="img/icons/achievement.svg" />
										</div>
										<div className='col-10'>
											<p className='texts-s'>
												Spend $100 dollars on the establishment
											</p>
										</div>
									</div>
								</div>

								<div className='col-12 col-md-6'>
									<p className='texts-xl'>Coupons</p>
									<div className='row'>
										<div className="col-2">
										<img src="img/icons/coupon.svg" />
										</div>
										<div className='col-10'>
											<p className='texts-s'>
												20% off your next order
											</p>
										</div>
									</div>
									<div className='row'>
										<div className="col-2">
										<img src="img/icons/coupon.svg" />
										</div>
										<div className='col-10'>
											<p className='texts-s'>
												Pay one, get one free pancake
											</p>
										</div>
									</div>
									<div className='row'>
										<div className="col-2">
										<img src="img/icons/coupon.svg" />
										</div>
										<div className='col-10'>
											<p className='texts-s'>
												Get one drink and the second one at 50% of its cost
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="nft-coupons"></div>
					</div>
				</div>
			</section>
		</main>
	);
}

export default Collection;