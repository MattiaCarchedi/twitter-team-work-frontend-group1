import React from "react";
import Header from "./components/Header";
import MessageList from './components/MessageList';
// import SingleMessageItem from './components/SingleMessageItem';
import { Route, useRouteMatch } from 'react-router-dom';

import "./App.css";

function App() {
	const match = useRouteMatch();
	return (
		<div className="App">
			<div className="App-header">
				<div className="header"><Header /></div>
				<Route path={`${match.url}/:itemId`}>
					{/* <SingleMessageItem /> */}
					not implemented yet
				</Route>
				<Route exact path='/'>
					<div className="messagelist"><MessageList /></div>
				</Route>
			</div>
		</div>
	);
}

export default App;
