interface Props {
	children: string
	color: string
	onClick: () => void
}

const Button = ({children, color, onClick}: Props) => {
	return <button
	type="button"
	className={"btn btn-" + color}
	onClick={onClick}>
		<strong>{children}</strong>
	</button>
}

export default Button;