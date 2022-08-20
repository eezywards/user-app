import '../css/main.css';
import '../css/dashboard.css';

function Dashboard() {
	return (
		<main id="dashboard">
			<nav>
				<div className="nav-toggler">
					xx
				</div>
				<div className="icon">
					<img src="img/icons/qr.svg" />
				</div>
				<div className="logo">
					<img src="img/logo/eezywards-logo.svg" />
				</div>

			</nav>
			<header>
				<div><span>0xE9...cdE9</span><img src="" /></div>
				<img src="img/icons/qr.svg" className="qr-code" />
			</header>
		</main>
	);
}

export default Dashboard;