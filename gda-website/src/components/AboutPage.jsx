import { useEffect } from "react";
import "./About.css";
import Footer from "./Footer";

const AboutPage = () => {
	useEffect(() => {
		document.querySelector(".footer-container").style.top =
			document.documentElement.scrollHeight + "px";
	}, []);

	return (
		<>
			<div className='about-container'>
				<div className='about-content'>
					<div className='about-bg'></div>
					<h2
						style={{ fontSize: "1.7rem" }}
						className='about-content-head'>
						About
					</h2>
					<p className='about-content-para'>
						Garg Defence and Aerospace is a dynamic startup, proudly
						recognized as indigenous manufacturers, poised to make a
						significant impact in the defence and aerospace
						industries. We are rapidly emerging as specialists in
						the design and production of kamikaze drones, loitering
						munitions, anti-tank drone, surveillance drones,
						logistics drones, and a range of other specialized
						unmanned aerial vehicles (UAVs) uniquely tailored for
						the Defence forces. With a relentless pursuit of
						innovation and an unwavering commitment to military
						grade quality, we are reshaping the landscape of defence
						technology
					</p>
					<h2 className='about-content-head'>Our Vision</h2>
					<p className='about-content-para'>
						At Garg Defence and Aerospace, we envision a future
						where cutting-edge UAV technology empowers our armed
						forces with unmatched capabilities. Our mission is to be
						at the forefront of this transformation, providing
						specialized solutions that enhance national security,
						safeguard lives, and promote technological excellence
					</p>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default AboutPage;
