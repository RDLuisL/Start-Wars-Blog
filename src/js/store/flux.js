const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
			baseUrl: "https://www.swapi.tech/api",
			activeItem: {
				// Characters
				properties: {
				name: "Receiving name",
				birth_year: "Receiving info",
				eye_color: "Receiving info",
				gender: "Receiving info",
				hair_color: "Receiving info",
				height: "Receiving info",
				// Planets
				climate: "Receiving info",
				diameter: "Receiving info",
				gravity: "Receiving info",
				orbital_period: "Receiving info",
				population: "Receiving info",
				rotation_period: "Receiving info",
				surface_water: "Receiving info",
				terrain: "Receiving info",
				// Vehiles
				cargo_capacity: "Receiving info",
				consumables: "Receiving info",
				cost_in_credits: "Receiving info",
				crew: "Receiving info",
				manufacturer: "Receiving info",
				max_atmosphering_speed: "Receiving info",
				model: "Receiving info",
				passengers: "Receiving info"
				}
			}
		},
			
		actions: {
			// Use getActions to call a function within a fuction
			// Fetch para los Characters
				/*
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			getCharacters: () => {
				const store = getStore();
				var requestOptions = {
				  method: "GET",
				  redirect: "follow",
				};
		
				fetch(store.baseUrl + "/people/", requestOptions)
				  .then((response) => response.json())
				  .then((result) => {
					sessionStorage.setItem(
					  "characters",
					  JSON.stringify(result.results)
					);
				  })
				  .catch((error) => console.log("error", error));
			  },
			// Fetch para los Planets
			getPlanets: () => {
				const store = getStore();
				var requestOptions = {
				  method: "GET",
				  redirect: "follow",
				};
		
				fetch(store.baseUrl + "/planets/", requestOptions)
				  .then((response) => response.json())
				  .then((result) => {
					sessionStorage.setItem("planets", JSON.stringify(result.results));
				  })
				  .catch((error) => console.log("error", error));
			  },
			// Fetch para los Vehicles
			getVehicles: () => {
				const store = getStore();
				var requestOptions = {
				  method: "GET",
				  redirect: "follow",
				};
		
				fetch(store.baseUrl + "/vehicles/", requestOptions)
				  .then((response) => response.json())
				  .then((result) => {
					sessionStorage.setItem("vehicles", JSON.stringify(result.results));
				  })
				  .catch((error) => console.log("error", error));
			  },
			
			
			  getData: () => {
				const actions = getActions();
				actions.getCharacters();
				actions.getPlanets();
				actions.getVehicles();
			  },
			  getDetails: (fetchRoute) => {
				const store = getStore();
				var requestOptions = {
				  method: "GET",
				  redirect: "follow",
				};
			
				//get the store

				fetch(store.baseUrl + fetchRoute, requestOptions)
				.then((response) => response.json())
				.then((result) => {
				  setStore({ activeItem: result.result });
				})
				.catch((error) => console.log("error", error));

				}
		}
	}
};		
		


export default getState;
