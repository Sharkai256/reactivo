import { useState } from "react";

interface Props {
	items: string[]
	children: string
	onItemSelect: (item: string) => void
}

const ImageList = ({items, children, onItemSelect: onSelectItem}: Props) => {
	//TODO: make a list with images; buttons that swipes them *(and changes index logo); add onClick with wobbling;

	const [imgIndex, setImgIndex] = useState(-1);

	const imgList = items.map((item, index) => <li
		key={index}
		onClick={() => {
			setImgIndex(index)
			onSelectItem(item)
		}}
		className={
			imgIndex == index ? "list-group-item active" : "list-group-item"
		}>{item}
	</li>);

	return <>
		<h1>{children}</h1>
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