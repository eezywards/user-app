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
							<p id="collection-name" className="texts-xl">Starbucks</p>
						</div>
						<div className="col-5">
							<a href="/collections" className="texts-sm">Go back <img src="img/icons/back.svg" /> </a>
						</div>
					</div>
					<div className="nft-metadata">
						<div className="nft-img">
							<img src="img/premium-nft.png" />
						</div>
						<div className="nft-achievements"></div>
						<div className="nft-coupons"></div>
					</div>
				</div>
			</section>
		</main>
	);
}

export default Collection;