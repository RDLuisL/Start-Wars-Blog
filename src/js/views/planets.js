import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { ItemCard } from "../component/itemCard";

export const Planets = () => {
	return (
		<div className="container-full px-5 mt-3">
			<div className="d-flex flex-wrap justify-content-start mb-4">
			{planets.map((key,index) => 
					<ItemCard 
						key={index} 
						name={planets[index].name}
						uid={planets[index].uid}
						type="planets"
						index={index}
					>
					</ItemCard>)}
						</div>
						<div className="text-center mt-4 mb-5">
					<Link to="/">
						<button className="btn home-button">Goback</button>
					</Link>
			</div>
		</div>
	);
};
