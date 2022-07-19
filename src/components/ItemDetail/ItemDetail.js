import './styles.css';

import { ItemCount } from '../ItemCount/ItemCount';
import { ShowPic } from '../../helpers/showPic';
import { useCartContext } from '../../context/cartContext';

const ItemDetail = ({ producto }) => {
	const { addToCart } = useCartContext();

	const stock = 10;
	const initial = 1; // Valor inicial
	const onAdd = (cant) => {
		alert(`agregaste ${cant} items`);

		addToCart(producto, cant);
	};

	return (
		<>
			<div className="allDetails">
				<div className="cardDetail">
					<img className="imgDetail" src={ShowPic(producto)} />
					<h2 className="titleDetail">{producto.title}</h2>
					<h3 className="descriptionDetail">{producto.description}</h3>
					<h4 className="priceDetail">$ {producto.price}</h4>
				</div>
				<div>
					<ItemCount
						stock={stock}
						initial={initial}
						onAdd={onAdd}
						producto={producto}
					/>
				</div>
			</div>
		</>
	);
};

export default ItemDetail;
