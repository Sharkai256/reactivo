// import { useState } from "react";
// import Alert from "./components/Alert";
import ImageList from "./components/ImageList";
// import Image from "./components/Image";
// import Button from "./components/Button";

const App = () => {
	// const [alertVisibility, setAlertVisibility] = useState(false);

	const images = [
		"/icon.png",
		"/icon.png",
		"/icon.png",
		"/icon.png"
	];

	const handleSelect = (item: string) => console.log(item)

	return <>
		<div>
			<ImageList
			images={images}
			onClick={handleSelect}>
				Silly images
			</ImageList>
			{/* {alertVisibility && <Alert onClose={() => setAlertVisibility(false)}>wow alert!</Alert>} */}
			{/* <Button color="primary" onClick={() => setAlertVisibility(true)}>activate alert</Button> */}
		</div>
	</>
	// return <Image src="/icon.png" height="100px"></Image>
}

export default App;