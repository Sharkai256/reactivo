import { useState } from "react";
import { motion } from 'framer-motion';

interface Props {
	src: string
	hoverSrc: string
	className?: string
	sound?: string
}

const Image = ({src, hoverSrc, sound, className}: Props) => {
	let [dimensions, setDimensions] = useState(100);
	const audio = new Audio(sound);
	audio.volume = 0.5;

	return <motion.img
		initial={{ scale: 0 }}
		animate={{ scale: 1, transitionDuration: "0.5s"}}

		whileTap={{rotate: 360}}
		whileHover={{scale: 1.5}}

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
		onClick={() => {
			setDimensions(dimensions -= 25)
			audio.play()
		}}
		className={className}>
	</motion.img>;
}

export default Image;