import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./views/home";
import { Characters } from "./views/characters.js";
import { Planets } from "./views/planets.js";
import { Vehicles } from "./views/vehicles.js"
import { Detail } from "./views/details.js"
import { Navbar } from "./component/navbar.js";
import injectContext from "./store/appContext";



//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/character">
							<Characters />
						</Route>
						<Route exact path="/planets">
							<Planets />
						</Route>
						<Route exact path="/vehicles">
							<Vehicles />
						</Route>
						<Route exact path="/character/:uid">
							<Detail />
						</Route>
						<Route exact path="/planets/:uid">
							<Detail />
						</Route>
						<Route exact path="/vehicles/:uid">
							<Detail />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};
export default injectContext(Layout);


