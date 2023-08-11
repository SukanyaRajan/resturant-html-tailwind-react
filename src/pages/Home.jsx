import React from 'react';
import { Categories,  FooterNav,  NavBar, Restaurants, Slider } from '../components';

const Home = () => {

	return (
		
		<div>
			<NavBar />
			<Slider />
			<Categories />
			<Restaurants />
			<FooterNav />

		</div>
	)
}

export default Home