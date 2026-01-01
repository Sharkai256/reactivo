const ListGroup = () => {
	var id = 0;
	const items = [
		"one",
		"two",
		"three",
		"four"
	];

	return <>
		<h1>this is a list</h1>
		<ul className="list-group">
			{items.map(item => <li key={id++} className="list-group-item">+{item}</li>)}
		</ul>;
	</>
}

export default ListGroup;