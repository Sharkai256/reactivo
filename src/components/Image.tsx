import { useState, /* useEffect */ } from "react";
import { motion, /* useAnimate */ } from 'framer-motion';

interface Props {
	src: string
	hoverSrc: string
	// height?: number
	// width?: number
	// onClick?: () => void
	className?: string
	sound?: string
}

const Image = ({src, hoverSrc, sound, /* height, width, onClick, */ className}: Props) => {
	let [dimensions, setDimensions] = useState(100)
	const audio = new Audio(sound)
	audio.volume = 0.5

	return <motion.img
	initial={{ scale: 0 }}
	animate={{ scale: 1, transitionDuration: "0.5s"}}
	whileTap={{rotate: 360}}
	whileHover={{scale: 1.5}}
	/* onHoverStart={(e) => {
		e.currentTarget.src = "../assets/react.svg"
	}}
	onHoverEnd={() => {
		src = "/icon.png"
	}} */
	onMouseOver={(e) => {
		e.currentTarget.src = hoverSrc
	}}
	onMouseLeave={(e) => {
		e.currentTarget.src = src
	}}
	src={src}
	height={dimensions + "px"}
	width={dimensions + "px"}
	draggable="false"
	// height={height + "px"}
	// width={width + "px"}
	// onClick={onClick}
	onClick={() => {
		setDimensions(dimensions -= 25)
		audio.play()
	}}
	className={className}></motion.img>;
}

export default Image;