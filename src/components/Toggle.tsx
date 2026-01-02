interface Props {
	theme: boolean
	onChange: () => void
	className?: string
}

const Toggle = ({ theme, onChange, className}: Props) => {
	return <label>
				<input
				type="checkbox"
				checked={theme == true}
				onChange={onChange}
				className={className}
				></input>
				use dark mode
			</label>
	// return <label>
	// 			<input
	// 			type="checkbox"
	// 			checked={theme == true}
	// 			onChange={(e) => {
	// 				setTheme(e.target.checked ? true : false)
	// 			}}
	// 			></input>
	// 			use dark mode
	// 		</label>
}

export default Toggle;