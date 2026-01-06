import Image from "./Image";

interface Props {
	images: string[][]
	children: string
	className?: string
}

const ImageList = ({images, children: title, className}: Props) => {
	const imgList = images.map((arrItem, index) => {
		return <Image
			src={arrItem[0]}
			hoverSrc={arrItem[1]}
			key={index}
			className="img"
			sound={arrItem[2]}>
		</Image>
	});

	return <div className={className}>
		<h1>{title}</h1>
		<ul className="list-group">
			{imgList}
		</ul>
		<br></br>
		<p style={{"fontSize": "15px"}}>hover or click them</p>
	</div>
}

export default ImageList;