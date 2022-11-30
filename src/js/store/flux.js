const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters:[],
			planets:[],
			vehicles: [],
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

			// Funcion para obtener datos de personajes	
			getCharacters: () => {
				fetch("https://www.swapi.tech/api/people/", {
					method: "GET",
					headers:{"Content-Type":"application/json"}
				})
 				 .then(response => response.json())
 				 .then(data => setStore({personajeSW:data.results}))
 				 .catch(error => console.log('error', error));
			},

			// 	const store = getStore();
			// 	var requestOptions = {
			// 	  method: "GET",
			// 	  redirect: "follow",
			// 	};
		
			// 	fetch(store.baseUrl + "/people/", requestOptions)
			// 	  .then((response) => response.json())
			// 	  .then((result) => {
			// 		sessionStorage.setItem(
			// 		  "characters",
			// 		  JSON.stringify(result.results)
			// 		);
			// 	  })
			// 	  .catch((error) => console.log("error", error));
			//   },
			

			// Funcion para obtener datos de personajes	Planets
			getPlanets: () => {
				fetch("https://www.swapi.tech/api/planets/", {
					method: "GET",
					headers:{"Content-Type":"application/json"}
				})
  				.then(response => response.json())
  				.then(data => setStore({planetasSW:data.results}))
  				.catch(error => console.log('error', error));
			},

			// 	const store = getStore();
			// 	var requestOptions = {
			// 	  method: "GET",
			// 	  redirect: "follow",
			// 	};
		
			// 	fetch(store.baseUrl + "/planets/", requestOptions)
			// 	  .then((response) => response.json())
			// 	  .then((result) => {
			// 		sessionStorage.setItem("planets", JSON.stringify(result.results));
			// 	  })
			// 	  .catch((error) => console.log("error", error));
			//   },


			// Funcion para obtener datos de personajes	Vehicles
				getVehicles: () => {
				fetch("https://www.swapi.tech/api/vehicles/", {
					method: "GET",
					headers:{"Content-Type":"application/json"}
				})
				.then(response => response.json())
				.then(data => setStore({vehicles:data.results}))
  				.catch(error => console.log('error', error));
			},

			// 	const store = getStore();
			// 	var requestOptions = {
			// 	  method: "GET",
			// 	  redirect: "follow",
			// 	};
		
			// 	fetch(store.baseUrl + "/vehicles/", requestOptions)
			// 	  .then((response) => response.json())
			// 	  .then((result) => {
			// 		sessionStorage.setItem("vehicles", JSON.stringify(result.results));
			// 	  })
			// 	  .catch((error) => console.log("error", error));
			//   },
			
			// Funcion para obtener agregar a Favoritos	
			addFavorites: (item) => {
                const store = getStore();
                if (!store.favorites.includes(item)) {
                    setStore({
                        favorites: [...store.favorites, item]
                    });
                } else {
                    setStore({
                        favorites: store.favorites.filter((name) =>
                            name !== item)
                    })
                }
            },
			
			// Funcion para obtener borrar de Favoritos	
			deleteFavorites: (index) => {
                const store = getStore();
                setStore({
                    favorites: store.favorites.filter((favorites, i) => i !== index)
                })
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
