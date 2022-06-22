import { useCartContext } from '../../context/cartContext';

const Cart = () => {
	// 1. Trayendo el useContext
	const { cart, vaciarCart } = useCartContext();

	return (
		<div>
			<ul>
				{cart.map((item) => (
					<li key={item.id}>
						<img src={item.pictureUrl} />
						Nombre producto: {item.title} Precio: ${item.price} Cantidad:{' '}
						{item.cantidad}
					</li>
				))}
			</ul>
			<div>
				<button onClick={vaciarCart}>Vaciar Carrito</button>
			</div>
		</div>
	);
};

export default Cart;
