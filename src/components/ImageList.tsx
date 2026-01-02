// import { useState } from "react";
import Image from "./Image";

interface Props {
	images: string[]
	children: string
	// onClick: (index: string) => void
}

const ImageList = ({images, children: title/* , onClick */}: Props) => {
	// const [selectedIndex, setSelectedIndex] = useState(-1);
	// let [dimensions, setDimensions] = useState(100)

	// const imgList = images.map((item, index) => <img
	// 	key={index}
	// 	onClick={() => {
	// 		setImgIndex(index)
	// 		onSelectItem(item)
	// 	}}
	// 	className={imgIndex == index ? "list-group-item active" : "list-group-item"}
	// 	src={item}>
	// 	</img>);

	const imgList = images.map((item, index) => <Image
		src={item}
		// height={dimensions}
		// width={dimensions}
		key={index}
		// className={selectedIndex == index ? "list-group-item active" : "list-group-item"}
		className="img"
		/* onClick={() => {
			setSelectedIndex(index)
			onClick(item)
		}} */></Image>)

	return <>
		<h1>{title}</h1>
		<ul className="list-group">
			{imgList}
		</ul>
		<br></br>
		<h6>click on images</h6>
	</>
}

export default ImageList;