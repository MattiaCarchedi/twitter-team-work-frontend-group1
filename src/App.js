import React from "react";
import Header from "./components/Header";
import MessageList from './components/MessageList';

import "./App.css";

function App() {
	return (
		<div className="App">
			<div className="App-header">
				<div className="header"><Header /></div>
				<div className="messagelist"><MessageList /></div>
				</div>
		</div>
	);
}

export default App;
