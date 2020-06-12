import React from "react";
import "./Header.css";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import logo from "./logo-head-trans.png";
import searchIcon from "./crap-icon.png";
import SearchInputField from "./SearchInputField";

export default class Header extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		function handleClick() {
			console.log("clicked!");
		}

		return (
			<Router>
				<nav className="nav">
					<div className="logo">
						<img className="nav-logo" src={logo} alt="" />
						<span>Shitter</span>
					</div>

					<ul className="nav_list">
						<SearchInputField />
						<NavLink to="/" onClick={handleClick}>
							<img src={searchIcon} alt="" className="search-icon" />
						</NavLink>

						<NavLink to="/" className="nav_list-link">
							<li>Login</li>
						</NavLink>
					</ul>
				</nav>
			</Router>
		);
	}
}
