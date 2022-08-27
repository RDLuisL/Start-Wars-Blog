import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { ItemCard } from "../component/itemCard";


	<div className="container-full px-5 mt-3">
			<div className="d-flex flex-wrap justify-content-start mb-4">
			{characters.map((key,index) => 
			<ItemCard 
			key={index} 
			name={characters[index].name} 
			uid={characters[index].uid}
			type="people"
			index={index}
			></ItemCard>)}
			</div>
			<div className="text-center mt-4 mb-5">
			<a>
				<button className="btn home-button">Goback</button>
			</a>
			</div>
		</div>