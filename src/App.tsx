// import Alert from "./components/Alert";
import { useState } from "react";
import ImageList from "./components/ImageList";
import Toggle from "./components/Toggle"
// import Button from "./components/Button";
import './App.css'

//TODO: implement every react feature once
/*
JSX
Controlled Components
Hooks
Purity
Effects
Refs
Context
Portals
Suspense
Error Boundaries
*/
const App = () => {
	// const [alertVisibility, setAlertVisibility] = useState(false);
	let [theme, setTheme] = useState(false)
	// document.documentElement.style.setProperty('--body-bg-color', theme);

	const images = [
		"/icon.png",
		"/icon.png",
	];

	// const handleSelect = (item: string) => console.log(item)

	return <>
		<div className={"main"} color-theme={theme ? "dark" : ""} /* style={{backgroundColor: theme}} */>
			<ImageList
			images={images}
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
			<Toggle theme={theme} onChange={() => setTheme(!theme)}></Toggle>
			{/* {alertVisibility && <Alert onClose={() => setAlertVisibility(false)}>wow alert!</Alert>} */}
			{/* <Button color="primary" onClick={() => setAlertVisibility(true)}>activate alert</Button> */}
		</div>
	</>
	// return <Image src="/icon.png" height="100px"></Image>
}

export default App;