import carrito from '../../assets/images/cart.svg';
import { useCartContext } from '../../context/cartContext';

const CartWidget = () => {
	const { cart, totalCantidades } = useCartContext();
	return (
		<>
			<div>
				<img src={carrito} alt="Carro" className="menu_img_cart" />
				<h6>{totalCantidades}</h6>
			</div>
		</>
	);
};

export default CartWidget;
