import Item from "./Item";

interface Props {

}

const ItemList = ({}: Props) => {
	return (
		<>
			<div></div>
			<div>
				<Item></Item>
				<Item></Item>
				<Item></Item>
				<Item></Item>
				<Item></Item>
			</div>
			<div></div>
		</>
	)
}

export default ItemList;