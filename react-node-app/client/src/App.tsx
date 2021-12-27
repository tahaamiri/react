import React, { useEffect, useState } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";

function App() {
    const [message, setMessage] = useState<any>("");


	useEffect(() => {
		axios
			.get("/api")
			.then((response) => {
				console.log(response);
                setMessage(response.data.message);
                
			})
			.catch((error) => {
				console.log(error);
			})
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>{!message ? "Loading..." : message}</p>
			</header>
		</div>
	);
}

export default App;
