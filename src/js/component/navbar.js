import React, { useContext, useState } from "react";
import logo from "../../img/star-wars-logo.png";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from "reactstrap";

export const Navbar = () => {
	const { store, actions } =useContext(Context);
	const [show, setShow] = useState(false);
	const handleToggle = () => {
		setShow(!show);
	  };
	

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


				<Dropdown id="dropdown" isOpen={show} toggle={() => handleToggle()}>
					<DropdownToggle caret id="dropButton">
					Favorites 
					<i className="far fa-heart"></i>
					</DropdownToggle>
						<DropdownMenu id="dropMenu">
								{store.favorites[0] ? (
									store.favorites.map((key, index) => (
									<DropdownItem key={index} index={index} className="row d-flex flex-nowrap justify-content-between item-container">
									<Link className="dropItem col" to={`/${store.favorites[index].type}/${store.favorites[index].uid}`}>
										{store.favorites[index].name}
									</Link>
									<div className="col-1"></div>
									<i onClick={() => {actions.deleteFavorite(index);}}
										className="fas fa-backspace dropDelete col-1 d-flex justify-content-end"
									></i>
						</DropdownItem>
						))) : (
						<DropdownItem id="dropDefault">
						May the force be with you. Add your favs!
						</DropdownItem>
              )}
            </DropdownMenu>
          </Dropdown>
				
			</nav>
		);
};
