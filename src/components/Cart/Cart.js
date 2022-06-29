import './styles.css';

import { useCartContext } from '../../context/cartContext';

const Cart = () => {
	// 1. Trayendo el useContext
	const { cart, vaciarCart } = useCartContext();

	return (
		<div>
			<ul>
				{cart.map((item) => (
					<li key={item.id}>
						<div className="card-cart">
							<img src={item.pictureUrl} className="img-cart" />
							<div className="inform-cart">
								<div className="littleInfo-cart">
									<p className="detail-p-cart">producto: </p>
									<h3 className="detail-cart"> {item.title}</h3>
								</div>
								<div className="littleInfo-cart">
									<p className="detail-p-cart"> Precio: </p>
									<h3 className="detail-cart"> ${item.price}</h3>
								</div>
								<div className="littleInfo-cart">
									<p className="detail-p-cart"> Cantidad: </p>
									<h3 className="detail-cart"> {item.cantidad}</h3>
								</div>
							</div>
						</div>
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
