import React from "react";
import "./Header.css";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import logo from "./logo-head-trans.png";

export default class Header extends React.Component {

    
	render() {
		function handleChange(e) {
			console.log(e.target.value);
		}

		return (
			<Router>
				<nav className="nav">
					<div className="logo">
						<img className="nav-logo" src={logo} alt="" />
						<span>Shitter</span>
					</div>

					<ul className="nav_list">
						<input
							onChange={handleChange}
							className="nav_input"
							type="text"
							placeholder="Search..."
						/>
						<NavLink to="/" className="nav_list-link">
							<li>Login</li>
						</NavLink>
					</ul>
				</nav>
			</Router>
		);
	}
}
