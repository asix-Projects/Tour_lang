import NavBar from "@/components/header";
import React from "react";
import Hero from "../../components/hero";
import About from "@/components/about";
import Graph from './../../components/graph';
import  Footer  from '@/components/footer';
import Species from "@/components/species";

const Main = () => {
	return (
		<div>
			<NavBar />
			<Hero />
			<Species />
			<About />
			<Graph/>
			<Footer/>
		</div>
	);
};

export default Main;
