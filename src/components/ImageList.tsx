import { useState } from "react";
import Image from "./Image";

interface Props {
	images: string[]
	children: string
	onClick: (index: string) => void
}

const ImageList = ({images, children: title, onClick}: Props) => {
	const [selectedIndex, setSelectedIndex] = useState(-1);

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
		height="100px"
		width="100px"
		key={index}
		className={selectedIndex == index ? "list-group-item active" : "list-group-item"}
		onClick={() => {
			setSelectedIndex(index)
			onClick(item)
	}}></Image>)

	return <>
		<h1>{title}</h1>
		<ul className="list-group">
			{imgList}
		</ul>
		<h6>
			<br></br>
			click on image for the effect
		</h6>
	</>
}

export default ImageList;