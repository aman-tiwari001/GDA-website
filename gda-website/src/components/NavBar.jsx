/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./NavBar.css";
import { useEffect, useState } from "react";

const NavBar = ({ pathname, setPathname }) => {
	setPathname(window.location.pathname.split("/")[1]);

	const handleActiveMenu = () => {
		const route = window.location.pathname;
		setPathname((prevRoute) => {
			if (prevRoute === "")
				document.querySelector(".home").classList.remove("active");
			else {
				document
					.querySelector("." + prevRoute)
					.classList.remove("active");
			}
			return route.split("/")[1];
		});
	};

	const [showMenu, setShowMenu] = useState(true);

	const handleMobileMenu = () => {
		if (document.querySelector(".right-nav").style.display === "flex") {
			document.querySelector(".right-nav").style.display = "none";
			setShowMenu(!showMenu);
		} else {
			document.querySelector(".right-nav").style.display = "flex";
			setShowMenu(!showMenu);
		}
	};

	useEffect(() => {
		if (pathname === "")
			document.querySelector(".home").classList.add("active");
		else {
			document.querySelector("." + pathname).classList.add("active");
		}
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}, [pathname]);

	return (
		<div className='navbar-container'>
			<div className='navbar'>
				<ul>
					<li className='left-nav'>
						<img
							src='/gda-logo.png'
							alt='GDA logo'
							className='logo'
						/>
						<img
							src={showMenu ? "/menu.png" : "/close.png"}
							onClick={handleMobileMenu}
							className='menu'
							alt=''
						/>
					</li>
					<li className='right-nav'>
						<span className='home' onClick={handleActiveMenu}>
							<Link to={"/"}>
								<span>Home</span>
							</Link>
						</span>
						<span className='about' onClick={handleActiveMenu}>
							<Link to={"/about"}>
								<span>About</span>
							</Link>
						</span>
						<span className='products' onClick={handleActiveMenu}>
							<Link to={"/products"}>
								<span>Products</span>
							</Link>
						</span>
						<span className='careers' onClick={handleActiveMenu}>
							<Link to={"/careers"}>
								<span>Careers</span>
							</Link>
						</span>
						<span className='contact' onClick={handleActiveMenu}>
							<Link to={"/contact"}>
								<span>Contact</span>
							</Link>
						</span>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default NavBar;
