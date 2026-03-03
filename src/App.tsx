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

	let [sideBar, setSideBar] = useState(false)

	return (
		<>
			<div className={`main outer ${darkTheme ? "dark" : "white"}`}>
				<div>
					<button className="sBarToggle" onClick={() => setSideBar(!sideBar)}>Toggle sidebar</button>
					<Activity mode={sideBar ? "visible" : "hidden"}>
						<Sidebar></Sidebar>
					</Activity>
				</div>
				<div></div>
				<ToggleTheme theme={darkTheme} className={`toggle ${darkTheme ? "dark" : "white"}`} onChange={() => setDarkTheme(!darkTheme)}></ToggleTheme>
				<ItemList></ItemList>
			</div>
		</>
	)
}

export default App;