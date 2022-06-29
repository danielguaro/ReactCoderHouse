import './styleNavBar.css';

import { Link, NavLink } from 'react-router-dom';

import ButtonNavbar from './ButtonNavbar';
import CartWidget from '../CartWidget/CartWidget';
import arrowHoriz from '../../assets/images/arrowHoriz.svg';
import contacto from '../../assets/images/contact.svg';
import frase from '../../assets/images/mensaje.svg';
import home from '../../assets/images/home.svg';
import momento from '../../assets/images/moments.svg';
import styled from 'styled-components';
import us from '../../assets/images/us.svg';
import { useState } from 'react';

export const NavBar = () => {
	const [clicked, setClicked] = useState(false);
	const handleClick = () => {
		setClicked(!clicked);
	};

	return (
		<>
			<nav className="menu">
				<section className="menu_container">
					<NavLink to="/" className="image_nav" onClick={clicked}>
						<div></div>
					</NavLink>
					<div className={`menu_links ${clicked ? 'active' : ''}`}>
						<NavLink
							to="/"
							// para cambiar el color cuando estoy en el y cuando no, a traves de un destructuring
							className={({ isActive }) =>
								isActive ? 'color1 menu_link ' : 'color2 menu_link '
							}
							onClick={handleClick}
						>
							<img src={home} alt="home" className="menu_img" />
							Inicio
						</NavLink>
						<NavLink
							to="/categoria/ramo"
							className={({ isActive }) =>
								isActive ? 'color1 menu_link' : 'color2 menu_link'
							}
							onClick={handleClick}
						>
							<img src="./" alt="" className="menu_img" />
							Ramos
						</NavLink>
						<NavLink
							to="/categoria/ramillete"
							className={({ isActive }) =>
								isActive ? 'color1 menu_link' : 'color2 menu_link'
							}
							onClick={handleClick}
						>
							<img src="./" alt="" className="menu_img" />
							Ramilletes
						</NavLink>
						<NavLink
							to="/frases"
							className={({ isActive }) =>
								isActive ? 'color1 menu_link' : 'color2 menu_link'
							}
							onClick={handleClick}
						>
							<img src={frase} alt="Carro" className="menu_img" />
							Frases
						</NavLink>

						<NavLink
							to="/nosotros"
							className={({ isActive }) =>
								isActive ? 'color1 menu_link' : 'color2 menu_link'
							}
							onClick={handleClick}
						>
							<img src={us} alt="" className="menu_img" />
							Quienes somos
						</NavLink>

						<NavLink
							to="/contacto"
							className={({ isActive }) =>
								isActive ? 'color1 menu_link' : 'color2 menu_link'
							}
							onClick={handleClick}
						>
							<img src={contacto} alt="" className="menu_img" />
							contactanos
						</NavLink>
						<NavLink
							to="/cart"
							onClick={handleClick}
							className={({ isActive }) =>
								isActive ? 'color1 menu_link' : 'color2 menu_link'
							}
						>
							<CartWidget />
						</NavLink>
					</div>
					<div className="menu_desplegable">
						<ButtonNavbar clicked={clicked} handleClick={handleClick} />
					</div>
					<div className={`initial ${clicked ? 'active' : ''}`}></div>
				</section>
			</nav>
		</>
	);
};
