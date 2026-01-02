import { useState } from "react";
import { motion } from 'framer-motion';

interface Props {
	src: string
	// height?: number
	// width?: number
	// onClick?: () => void
	className?: string
}

//TODO: https://motion.dev/docs/react
const Image = ({src, /* height, width, onClick, */ className}: Props) => {
	let [dimensions, setDimensions] = useState(100)

	return <motion.img
	whileTap={{rotate: 360}}
	whileHover={{scale: 1.5}}
	src={src}
	height={dimensions + "px"}
	width={dimensions + "px"}
	// height={height + "px"}
	// width={width + "px"}
	// onClick={onClick}
	onClick={() => setDimensions(dimensions -= 5)}
	className={className}></motion.img>;
}

export default Image;