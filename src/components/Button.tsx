import { useEffect } from "react";
import { AnimationSequence, motion, useAnimate } from 'framer-motion';
interface Props {
	children: string
	className: string
	sound: string
}

const Button = ({children: text, className, sound}: Props) => {
	const audio = new Audio(sound);
	audio.volume = 0.25;

	const [scope, animate] = useAnimate();

	const sequence: AnimationSequence = [
		["button", {rotate: 10, scale: 1.1}, {duration: 1}],
		["button", {scale: 1}, {duration: 0.25}],
		["button", {rotate: -10, scale: 1.1}, {duration: 1}],
		["button", {scale: 1}, {duration: 0.25}]
	];

	useEffect(() => {
		animate(sequence);
		const repeatInterval = setInterval(() => animate(sequence), 2500);
	}, [])

	return <div ref={scope} className={className}>
		<motion.button
			type="button"
			onClick={() => audio.play()}>
			<strong>{text}</strong>
		</motion.button>
	</div>
}

export default Button;