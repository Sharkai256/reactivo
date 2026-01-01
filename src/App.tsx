import { useState } from "react";
import Alert from "./components/Alert";
import ImageList from "./components/ImageList";
// import Image from "./components/Image";
import Button from "./components/Button";

const App = () => {
	const [alertVisibility, setAlertVisibility] = useState(false);

	const images = [
			"img1",
			"img2",
			"img3",
			"img4"
	];

	const handleSelect = (item: string) => console.log(item)

	return <div>
		<ImageList
		items={images}
		onItemSelect={handleSelect}>
			Cat images
		</ImageList>
		{alertVisibility && <Alert onClose={() => setAlertVisibility(false)}>wow alert!</Alert>}
		<Button color="primary" onClick={() => setAlertVisibility(true)}>activate alert</Button>
	</div>;
}

export default App;