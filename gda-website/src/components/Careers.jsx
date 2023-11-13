import { useEffect } from "react";
import "./Careers.css";
import Footer from "./Footer";

const Careers = () => {
	useEffect(() => {
		document.querySelector(".footer-container").style.top =
			document.documentElement.scrollHeight + "px";
	}, []);

	return (
		<>
			<div className='careers-container'>
				<h2>Careers</h2>
				<p>
					Currently there are no openings, but we will be back with
					multiple exciting opportunitues in near future. Stay Tuned!
				</p>
			</div>
			<Footer />
		</>
	);
};

export default Careers;
