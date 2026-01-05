// import Alert from "./components/Alert";
import { useState, useEffect } from "react";
import ImageList from "./components/ImageList";
import Toggle from "./components/Toggle"
// import Button from "./components/Button";
// import { ErrorBoundary } from "react-error-boundary";
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
	// let [theme, setTheme] = useState(false)
	let [darkTheme, setTheme] = persistedState("darkTheme", false)

	// const [alertVisibility, setAlertVisibility] = useState(false);
	// document.documentElement.style.setProperty('--body-bg-color', theme);

	const images = [
		"/icon.png",
		"/icon.png",
	];

	// const handleSelect = (item: string) => console.log(item)
	return	<div className="main outer" color-theme={darkTheme ? "dark" : "white"} /* style={{backgroundColor: theme}} */>
				<ImageList
				images={images}
				// className={"inner"}
				/* onClick={handleSelect} */>
					Silly images
				</ImageList>
				{/* <label>
					<input
					type="checkbox"
					checked={theme == true}
					onChange={(e) => {
						setTheme(e.target.checked ? true : false)
					}}
					></input>
					use dark mode
				</label> */}
				<Toggle theme={darkTheme} className="toggle" onChange={() => setTheme(!darkTheme)}></Toggle>
				{/* {alertVisibility && <Alert onClose={() => setAlertVisibility(false)}>wow alert!</Alert>} */}
				{/* <Button color="primary" onClick={() => setAlertVisibility(true)}>activate alert</Button> */}
			</div>
	// return <Image src="/icon.png" height="100px"></Image>
}

export default App;