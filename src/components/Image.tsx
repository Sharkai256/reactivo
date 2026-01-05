import { useState } from "react";
import { motion } from 'framer-motion';

interface Props {
	src: string
	// height?: number
	// width?: number
	// onClick?: () => void
	className?: string
}

const Image = ({src, /* height, width, onClick, */ className}: Props) => {
	let [dimensions, setDimensions] = useState(100)

	return <motion.img
	whileTap={{rotate: 360}}
	whileHover={{scale: 1.5}}
	/* onHoverStart={(e) => {
		e.currentTarget.src = "../assets/react.svg"
	}}
	onHoverEnd={() => {
		src = "/icon.png"
	}} */
	onMouseOver={(e) => {
		e.currentTarget.src = "../assets/react.svg" //TODO: image
	}}
	onMouseLeave={(e) => {
		e.currentTarget.src = "/icon.png"
	}}
	src={src}
	height={dimensions + "px"}
	width={dimensions + "px"}
	draggable="false"
	// height={height + "px"}
	// width={width + "px"}
	// onClick={onClick}
	onClick={() => setDimensions(dimensions -= 5)}
	className={className}></motion.img>;
}

export default Image;