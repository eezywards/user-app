import '../css/main.css';
import '../css/dashboard.css';

import UANavbar from '../components/UserAppNav';

function Collection() {
	return (
		<main id="dashboard">
			<UANavbar />
			<section className="collection">
				<div className="container">
					<div className="row title-row">
						<div className="col-7">
							<p className="texts-xl">Starbucks</p>
						</div>
						<div className="col-5">
							<a href="/collections" className="texts-sm">Go back <img src="img/icons/back.svg" /> </a>
						</div>
					</div>
					<div className="col-6"></div>
					<div className="col-6">
						<div className="nft-metadata">
							<div className="nft-img"></div>
							<div className="nft-achievements"></div>
							<div className="nft-coupons"></div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}

export default Collection;