import { useState, useEffect, Activity } from "react";
import ToggleTheme from "./components/ToggleTheme"
import './App.css'
import ItemList from "./components/ItemList";
import Sidebar from "./components/Sidebar";

const App = () => {
	const [darkTheme, setDarkTheme] = useState(() => {
		const storedValue = localStorage.getItem("darkTheme");
		return storedValue ? JSON.parse(storedValue) : false;
	});

	useEffect(() => {
		localStorage.setItem("darkTheme", JSON.stringify(darkTheme));
	}, ["darkTheme", darkTheme]);

	return (
		<>
			<Activity mode={darkTheme ? "visible" : "hidden"}>
				<Sidebar></Sidebar>
			</Activity>
			<div className="main outer" color-theme={darkTheme ? "dark" : "white"}>
				<ItemList></ItemList>
				<ToggleTheme theme={darkTheme} className="toggle" onChange={() => setDarkTheme(!darkTheme)}></ToggleTheme>
			</div>
		</>
	)
}

export default App;