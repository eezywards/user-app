import React, {useState, useEffect, useContext} from 'react';


import '../css/main.css';
import '../css/dashboard.css';

import {ethers, BigNumber} from 'ethers';
import abi from '../abi.js';

import UANavbar from '../components/UserAppNav';

import { DataContext } from "../context/DataContext";

function Collections() {

	const { selected, setSelected } = useContext(DataContext);
	const [collections, setCollections] = useState(null)

	const getTokens = async() => {
		const contractAddress = "0xF471f71f67B630f25fF6B95E39B949Dc78480132";

		const provider = new ethers.providers.Web3Provider(window.ethereum);
		const signer = provider.getSigner();
		const contract = new ethers.Contract(contractAddress, abi, provider.getSigner());

		const account = await signer.getAddress();
		const tokens = await contract.balanceOf(account);

		console.log(tokens);
		const info = [];
		for (var i=0; i < 2; i++) {
			const uri = await contract.tokenURI(i);
			const response = await fetch(uri);
			const data = await response.json();
			await console.log(data);
			info.push(data);
			setSelected(data);
		}
		await setCollections(info);
		await console.log(collections);
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
						{collections ? collections.map((collection, index) => {
							return (
								<div className="col-12 col-md-4 cards">
									<div className="row">
										<div className="col-9 image" style={{backgroundImage: `url(${collection.image})`}}>
											<p className="texts-xl">{collection.name}</p>
										</div>
										<div className="col-3 caption">
											<p className="texts-sm">{collection.description}</p>
											<a href="/collection" className="btn-type-1">View more<img src="img/icons/arrow.svg" /></a>
										</div>
									</div>
								</div>
							)
						}): null}
					</div>
				</div>
			</section>
		</main>
	);
}

export default Collections;