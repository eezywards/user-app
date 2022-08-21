import '../css/main.css';
import '../css/dashboard.css';
import { NavLink, Router, Routes, Route } from "react-router-dom";

function UserAppNav() {
	const nav = () => {
	    var bod = document.getElementsByTagName("body")[0];
	    var toggler = document.getElementById("nav-toggler");
	    if (toggler.classList.contains("open-nav")) {
	      bod.classList.remove("open-nav");
	      toggler.classList.remove("open-nav");
	    } else {
	      bod.classList.add("open-nav");
	      toggler.classList.add("open-nav");
	    }
	}

	const closeNav = () => {
	    var bod = document.getElementsByTagName("body")[0];
	    var toggler = document.getElementById("nav-toggler");
	    bod.classList.remove("open-nav");
	    toggler.classList.remove("open-nav");
	}
	return (
		<div>
			<nav>
				<div className="nav-toggler">
					<a href="javascript:;" id="nav-toggler" onClick={nav}>
						<div className="bar1"></div>
						<div className="bar2"></div>
						<div className="bar3"></div>
					</a>
				</div>
				<div className="icon">
					<img src="img/icons/qr.svg" />
				</div>
				<div className="logo">
					<img src="img/logo/eezywards-logo.png" />
				</div>
			</nav>
			<div className="nav-menu">
				<div className="container">
					<ul>
						<li>
							<NavLink to="/dashboard" onClick={closeNav}>
								<span className="texts-t3">Dashboard</span>
								<img src="img/icons/arrow.svg" />
							</NavLink>
						</li>
						<li>
							<NavLink to="/collection" onClick={closeNav}>
								<span className="texts-t3">Collection & Achievements</span>
								<img src="img/icons/arrow.svg" />
							</NavLink>
						</li>
						<li>
							<NavLink to="/coupons" onClick={closeNav}>
								<span className="texts-t3">Coupons</span>
								<img src="img/icons/arrow.svg" />
							</NavLink>
						</li>
						<li className="disabled">
							<a>
								<span className="texts-t3">Rankings</span>
								<img src="img/icons/arrow.svg" />
							</a>
						</li>
					</ul>
					<div className="logout">
						<NavLink to="/" onClick={closeNav} className="texts-t3">Log out</NavLink>
					</div>
				</div>
			</div>
		</div>
	);
}

export default UserAppNav;