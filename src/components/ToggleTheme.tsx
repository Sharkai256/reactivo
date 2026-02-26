interface Props {
	theme: boolean
	onChange: () => void
	className?: string
}

const ToggleTheme = ({ theme, onChange, className}: Props) => {
	return (
		<label className={className}>
			<input
				type="checkbox"
				checked={theme == true}
				onChange={onChange}>
			</input>
			Toggle dark mode
		</label>
	)
}

export default ToggleTheme;