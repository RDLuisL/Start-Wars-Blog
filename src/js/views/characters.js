import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ItemCard } from "../component/itemCard.js";
import { Context } from "../store/appContext";

export const People = () => {
	const { store, actions } = useContext(Context);
	const people = JSON.parse(sessionStorage.getItem('people'))
	return (
		<div className="container-full px-5 mt-3">
			<div className="d-flex flex-wrap justify-content-start mb-4">
				{people.map((key,index) => 
				<ItemCard 
					key={index} 
					name={people[index].name} 
					uid={people[index].uid}
					type="people"
					index={index}
				>
				</ItemCard>
				)}
			</div>
			<div className="text-center mt-4 mb-5">
				<Link to="/">
					<button className="btn home-button">Goback</button>
				</Link>
			</div>
		</div>
	);
};