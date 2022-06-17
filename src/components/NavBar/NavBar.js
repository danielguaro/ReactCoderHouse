import './styleNavBar.css';

import { Link, NavLink } from 'react-router-dom';

import CartWidget from '../CartWidget/CartWidget';
import arrowHoriz from '../../assets/images/arrowHoriz.svg';
import contacto from '../../assets/images/contact.svg';
import frase from '../../assets/images/mensaje.svg';
import home from '../../assets/images/home.svg';
import momento from '../../assets/images/moments.svg';
import us from '../../assets/images/us.svg';

export const NavBar = () => {
	return (
		<>
			<nav className="menu">
				<section className="menu_container">
					<NavLink to="/">
						<a href="">
							<div className="image_nav"></div>
						</a>
					</NavLink>
					<ul className="menu_links">
						<NavLink
							to="/"
							// para cambiar el color cuando estoy en el y cuando no, a traves de un destructuring
							className={({ isActive }) => (isActive ? 'color1' : 'color2')}
						>
							<li className="menu_item">
								<a href="" className="menu_link">
									<img src={home} alt="home" className="menu_img" />
									Inicio
								</a>
							</li>
						</NavLink>
						<NavLink
							to="/categoria/ramo"
							className={({ isActive }) => (isActive ? 'color1' : 'color2')}
						>
							<li className="menu_item">
								<a href="" className="menu_link">
									<img src="./" alt="" className="menu_img" />
									Ramos
								</a>
							</li>
						</NavLink>
						<NavLink
							to="/categoria/ramillete"
							className={({ isActive }) => (isActive ? 'color1' : 'color2')}
						>
							<li className="menu_item">
								<a href="" className="menu_link">
									<img src="./" alt="" className="menu_img" />
									Ramilletes
								</a>
							</li>
						</NavLink>
						<li className="menu_item">
							<a href="./frases.html" className="menu_link">
								<img src={frase} alt="Carro" className="menu_img" />
								Frases
							</a>
						</li>
						<li className="menu_item menu_item-show">
							<a href="#" className="menu_link">
								<img src={momento} alt="" className="menu_img" />
								Momentos
								<img src={arrowHoriz} alt="arrow" className="menu_arrow" />
							</a>

							<ul className="menu_nesting">
								<li className="menu_inside">
									<a
										href="/momentoAmor.html"
										className="menu_link menu_link-inside"
									>
										Amor
									</a>
								</li>
								<li className="menu_inside">
									<a href="#" className="menu_link menu_link-inside">
										Día de Madres
									</a>
								</li>
								<li className="menu_inside">
									<a href="#" className="menu_link menu_link-inside">
										Condolencias
									</a>
								</li>
								<li className="menu_inside">
									<a href="#" className="menu_link menu_link-inside">
										Cumpleaños
									</a>
								</li>
							</ul>
						</li>
						<li className="menu_item">
							<a href="#" className="menu_link">
								<img src={us} alt="" className="menu_img" />
								Quienes somos
							</a>
						</li>
						<li className="menu_item">
							<a href="#" className="menu_link">
								<img src={contacto} alt="" className="menu_img" />
								contactanos
							</a>
						</li>
					</ul>
					<Link to="/cart">
						<CartWidget />
					</Link>
					<div className="menu_desplegable">
						<img
							src="./assets/desplegable.svg"
							alt=""
							className="menu_img-desple"
						/>
					</div>
				</section>
			</nav>
		</>
	);
};
