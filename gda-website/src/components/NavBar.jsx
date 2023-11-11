import { Link } from "react-router-dom";
import "./NavBar.css";
import { useEffect} from "react";

const NavBar = ({pathname, setPathname}) => {

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

	useEffect(() => {

		if (pathname === "")
			document.querySelector(".home").classList.add("active");
		else {
			document.querySelector("." + pathname).classList.add("active");
		}
	}, [pathname]);

	return (
		<div className='navbar-container'>
			<div className='navbar'>
				<ul>
					<li className='left-nav'>
						<img
							src='/gda-logo.png'
							alt='GDA logo'
							width={250}
							className='logo'
						/>
					</li>
					<li className='right-nav'>
						<span
							className='home'
							onClick={handleActiveMenu}>
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
