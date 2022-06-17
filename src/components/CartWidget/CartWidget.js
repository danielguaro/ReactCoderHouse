import cart from '../../assets/images/cart.svg';

const CartWidget = () => {
	return (
		<>
			<li className="menu_item">
				<a href="" className="menu_link">
					<img src={cart} alt="Carro" className="menu_img_cart" />
				</a>
			</li>
		</>
	);
};

export default CartWidget;
