import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ItemCard } from "../component/itemCard.js";
import { Context } from "../store/appContext";

export const Characters = () => {
	const { store, actions } = useContext(Context);
	const characters = JSON.parse(sessionStorage.getItem('characters'))
	return (
		<div className="container-full px-5 mt-3">
			<div className="d-flex flex-wrap justify-content-start mb-4">
				{characters.map((key,index) => 
				<ItemCard 
					key={index} 
					name={characters[index].name} 
					uid={characters[index].uid}
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