import React, {useState, useEffect} from 'react';


import '../css/main.css';
import '../css/dashboard.css';

import {ethers, BigNumber} from 'ethers';
import abi from '../abi.js';

import UANavbar from '../components/UserAppNav';



function Collections() {

	const [collections, setCollections] = useState(null)

	const getTokens = async() => {
		const contractAddress = "0xF471f71f67B630f25fF6B95E39B949Dc78480132";

		const provider = new ethers.providers.Web3Provider(window.ethereum);
		const signer = provider.getSigner();
		const contract = new ethers.Contract(contractAddress, abi, provider.getSigner());

		const account = await signer.getAddress();
		const tokens = await contract.balanceOf(account);

		console.log(tokens);
		for (var i=0; i < 2; i++) {
			const uri = await contract.tokenURI(i);
			const response = await fetch(uri);
			const data = await response.json();
			console.log(data);
			await setCollections(data);
			var name = data.name;
			var desc = data.description;
			var img = data.image;
			var elem = `<div class="col-12 col-md-4 cards">
						  <div class="row">
						    <div class="col-9 image" style="background-image: url('` + img + `');">
						      <p class="texts-xl">` + name + `</p>
						    </div>
						    <div class="col-3 caption">
						      <p class="texts-sm">` + desc + `</p>
						      <a href="/" class="btn-type-1">View more<img src="img/icons/arrow.svg" /></a>
						    </div>
						  </div>
						</div>`;
			var collections = await document.getElementById("nft-collections");
			await collections.insertAdjacentHTML('beforeend', elem);
		}
	}

	useEffect(() => {
		getTokens();
	}
	, []);

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
						{collections.map(item => (
							<div class="col-12 col-md-4 cards">
						  <div class="row">
						    <div class="col-9 image" style="background-image: url('` +' + {item.image} '+ `');">
						      <p class="texts-xl">` + item.name + `</p>
						    </div>
						    <div class="col-3 caption">
						      <p class="texts-sm">` + item.description + `</p>
						      <a href="/" class="btn-type-1">View more<img src="img/icons/arrow.svg" /></a>
						    </div>
						  </div>
						</div>
							))}
					</div>
				</div>
			</section>
		</main>
	);
}

export default Collections;