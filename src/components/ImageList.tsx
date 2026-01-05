// import { useState } from "react";
import Image from "./Image";

interface Props {
	// images: string[]
	images: string[][]
	children: string
	className?: string
	// onClick: (index: string) => void
}

const ImageList = ({images, children: title, className/* , onClick */}: Props) => {
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

	// const imgList = images.map((item, index) => <Image
	// 	src={item}
	// 	// height={dimensions}
	// 	// width={dimensions}
	// 	key={index}
	// 	// className={selectedIndex == index ? "list-group-item active" : "list-group-item"}
	// 	className="img"
	// 	/* onClick={() => {
	// 		setSelectedIndex(index)
	// 		onClick(item)
	// 	}} */></Image>)
	const imgList = images.map((arrItem, index) => {
		return <Image
		src={arrItem[0]}
		hoverSrc={arrItem[1]}
		key={index}
		className="img"
		sound={arrItem[2]}
		></Image>
	})

	return <div className={className}>
		<h1 /* style={{marginTop: "10%"}} */>{title}</h1>
		<ul className="list-group">
			{imgList}
		</ul>
		<br></br>
		<p style={{"fontSize": "15px"}}>hover or click them</p>
	</div>
}

export default ImageList;