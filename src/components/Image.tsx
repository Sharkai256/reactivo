interface Props {
	src: string
	height: string
	width: string
	onClick: () => void
	className: string
}

const Image = ({src, height, width, onClick, className}: Props) => {
	return <img src={src} height={height} width={width} onClick={onClick} className={className}></img>;
}

export default Image;