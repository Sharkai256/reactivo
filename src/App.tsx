import { useState, useEffect } from "react";
import Toggle from "./components/Toggle"
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

	return	<div className="main outer" color-theme={darkTheme ? "dark" : "white"}>
		<div className="item">
			<img src="./src/assets/img/mavi_1.png"/>
			<h6>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi rem fuga veniam magni. Molestiae rem vitae eos ipsa distinctio tenetur officiis suscipit. Molestias, repudiandae quis atque amet consectetur delectus cupiditate.</h6>
		</div>
		<div className="item">
			<img src="./src/assets/img/rivulet_1.png"/>
			<h6>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi rem fuga veniam magni. Molestiae rem vitae eos ipsa distinctio tenetur officiis suscipit. Molestias, repudiandae quis atque amet consectetur delectus cupiditate.</h6>
		</div>
		<div className="item">
			<img src="./src/assets/img/bn_2.png"/>
			<h6>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi rem fuga veniam magni. Molestiae rem vitae eos ipsa distinctio tenetur officiis suscipit. Molestias, repudiandae quis atque amet consectetur delectus cupiditate.</h6>
		</div>
		<div className="item">
			<img src="./src/assets/img/mavi_2.png"/>
			<h6>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi rem fuga veniam magni. Molestiae rem vitae eos ipsa distinctio tenetur officiis suscipit. Molestias, repudiandae quis atque amet consectetur delectus cupiditate.</h6>
		</div>
		<div className="item">
			<img src="./src/assets/img/rivulet_2.png"/>
			<h6>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi rem fuga veniam magni. Molestiae rem vitae eos ipsa distinctio tenetur officiis suscipit. Molestias, repudiandae quis atque amet consectetur delectus cupiditate.</h6>
		</div>
		<div className="item">
			<img src="./src/assets/img/bn_4.png"/>
			<h6>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi rem fuga veniam magni. Molestiae rem vitae eos ipsa distinctio tenetur officiis suscipit. Molestias, repudiandae quis atque amet consectetur delectus cupiditate.</h6>
		</div>
		<Toggle theme={darkTheme} className="toggle" onChange={() => setTheme(!darkTheme)}></Toggle>
	</div>
}

export default App;