import { useState, useEffect } from "react";
import ImageList from "./components/ImageList";
import Toggle from "./components/Toggle"
import Button from "./components/Button";
import './App.css'

const persistedState = (key: string, defaultValue: boolean) => {
	const [state, setState] = useState(() => {
		const storedValue = localStorage.getItem(key);
		return storedValue ? JSON.parse(storedValue) : defaultValue;
  	});

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(state));
	}, [key, state]);

	return [state, setState];
}

const App = () => {
	let [darkTheme, setTheme] = persistedState("darkTheme", false);

	const images = [
		["src/assets/img/mavi_1.png", "src/assets/img/mavi_2.png", "src/assets/sfx/terraria_fem_hit.mp3"],
		["src/assets/img/bn_4.png", "src/assets/img/bn_2.png", "src/assets/sfx/hit.mp3"],
		["src/assets/img/rivulet_2.png", "src/assets/img/rivulet_1.png", "src/assets/sfx/pluh.mp3"]
	];

	return	<div className="main outer" color-theme={darkTheme ? "dark" : "white"}>
		<ImageList
			images={images}
			className={"inner"}>
			Silly images
		</ImageList>
		<Toggle theme={darkTheme} className="toggle" onChange={() => setTheme(!darkTheme)}></Toggle>
		<Button className="evil" sound="src/assets/sfx/evil_laugh.mp3">magick button</Button>
	</div>
}

export default App;