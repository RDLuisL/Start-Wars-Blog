import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ItemCard } from "../component/itemCard.js";
import { Context } from "../store/appContext";

export function People () {
	// const { store, actions } = useContext(Context);
	// const people = JSON.parse(sessionStorage.getItem('people'))
	// return (
	// 	<div className="container-full px-5 mt-3">
	// 		<div className="d-flex flex-wrap justify-content-start mb-4">
	// 			{people.map((key,index) => 
	// 			<ItemCard 
	// 				key={index} 
	// 				name={people[index].name} 
	// 				uid={people[index].uid}
	// 				type="people"
	// 				index={index}
	// 			>
	// 			</ItemCard>
	// 			)}
	// 		</div>
	// 		<div className="text-center mt-4 mb-5">
	// 			<Link to="/">
	// 				<button className="btn home-button">Goback</button>
	// 			</Link>
	// 		</div>
	// 	</div>
	// );
	const [datos,setDatos] = useState();  
    const {theid} =useParams();
    const {store, actions} = useContext(Context);
    useEffect(()=>{
				fetch("https://www.swapi.tech/api/people/"+theid )
				.then(response => response.json())
				.then(result => {
					console.log(result.result)
					setDatos(result.result.properties)})
				.catch(error => console.log('error', error));
    			},[])
    return <>

    <h1 className="tinfo1">{datos?.name}</h1>
    <table className="table table-dark">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Height</th>
      <th scope="col">Mass</th>
      <th scope="col">Hair color</th>
      <th scope="col">Skin color</th>
      <th scope="col">Eyecolor</th>
      <th scope="col">Birth year</th>
      <th scope="col">Gender</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"></th>
      <td>{datos?.height} cm</td>
      <td>{datos?.mass} Kg</td>
      <td>{datos?.hair_color}</td>
      <td>{datos?.skin_color}</td>
      <td>{datos?.eye_color}</td>
      <td>{datos?.birth_year}</td>
      <td>{datos?.gender}</td>
    </tr>
  
  </tbody>
</table>
</>
};