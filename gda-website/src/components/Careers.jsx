import { useEffect } from "react";
import "./Careers.css";

const Careers = ({ setDocHeight }) => {
	useEffect(() => {
		setDocHeight(document.documentElement.scrollHeight);
	}, []);

	return (
		<div className='careers-container'>
			<h2>Careers</h2>
			<p>
				Currently there are no openings, but we will be back with
				multiple exciting opportunitues in near future. Stay Tuned!
			</p>
		</div>
	);
};

export default Careers;
