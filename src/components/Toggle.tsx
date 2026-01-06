interface Props {
	theme: boolean
	onChange: () => void
	className?: string
}

const Toggle = ({ theme, onChange, className}: Props) => {
	return <label className={className}>
		<input
			type="checkbox"
			checked={theme == true}
			onChange={onChange}>
		</input>
		use dark mode
	</label>
}

export default Toggle;