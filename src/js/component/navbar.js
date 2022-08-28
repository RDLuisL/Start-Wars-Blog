import React, { useState } from "react";


import logo from "../../img/star-wars-logo.png";

import { Link } from "react-router-dom";


export const Navbar = () => {
	return (
			<nav className="navbar px-5 mb-3 d-flex justify-content-between row">
				<div className="col-sm">
					<Link to="/">
						<img
							id="logo"
							className="navbar-brand mb-0 h1 img-fluid"
							src={logo}
							alt="Star Wars Logo">
						</img>
					</Link>
				</div>
				<div className="col-lg d-flex justify-content-center">
					<Link to="/character">
						<button className="btn btn-primary categories">Characters</button>
					</Link>
					<Link to="/planets">
						<button className="btn btn-primary categories">Planets</button>
					</Link>
					<Link to="/vehicles">
						<button className="btn btn-primary categories">Vehicles</button>
					</Link>
						<div className="d-flex justify-content-end">
								Favorites 
							<i className="far fa-heart"></i>
						</div>
				</div>
			</nav>
		);
};
