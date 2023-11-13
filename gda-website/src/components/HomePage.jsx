/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import { useEffect } from "react";
import Footer from "./Footer";

const HomePage = ({ setPathname }) => {
	const navigate = useNavigate();

	useEffect(() => {
		document.querySelector(".footer-container").style.top =
			document.documentElement.scrollHeight + 100 + "px";
	}, []);

	return (
		<>
			<div className='home-container'>
				<p id='mobile-title'>GARG DEFENCE & AEROSPACE PVT. LTD.</p>
				<div className='bg-filter'>
					<video
						muted
						autoPlay
						loop
						className='homepage-bg'
						src='drone_Trim.mp4'></video>
				</div>
				<h2 className='gda-tagline'>
					Empowering our armed forces with precision, technology, and
					innovation
				</h2>
				<button
					className='learnmore'
					onClick={() => {
						navigate("/about");
						setPathname((prevRoute) => {
							if (prevRoute === "")
								document
									.querySelector(".home")
									.classList.remove("active");
							else {
								document
									.querySelector("." + prevRoute)
									.classList.remove("active");
							}
							return "about";
						});
					}}>
					Learn More
				</button>
				<div className='home-content'>
					<h2 className='whyus'>Why choose us?</h2>
					<div className='key-items'>
						<div
							style={{
								background: "url('drone-bg.jpg')",
								backgroundRepeat: "no-repeat",
								backgroundPosition: "center",
								backgroundSize: "cover",
								color: "white",
								backdropFilter: "brightness(30%)",
							}}>
							<div
								style={{
									backdropFilter: "brightness(35%)",
									width: "100%",
									height: "100%",
									margin: "0",
									padding: "0.1vw 1vw 0vw 1vw",
								}}>
								<h3>Specialized Drones:</h3>
								<p>
									We specialize in the development of kamikaze
									drones, loitering munitions, anti-tank
									drone, surveillance drones and other
									mission-specific UAVs. Our products are
									engineered to meet the unique requirements
									of the Defence forces.
								</p>
							</div>
						</div>
						<div
							style={{
								background: "url('innovation.jpg')",
								backgroundRepeat: "no-repeat",
								backgroundPosition: "center",
								backgroundSize: "cover",
								color: "white",
								backdropFilter: "brightness(30%)",
							}}>
							<div
								style={{
									backdropFilter: "brightness(35%)",
									width: "100%",
									height: "100%",
									margin: "0",
									padding: "0.1vw 1vw 0vw 1vw",
								}}>
								<h3>Innovation and R&D:</h3>
								<p>
									Garg Defence and Aerospace is driven by
									innovation. Our agile R&D teams continually
									pioneer new technologies and concepts to
									create advanced solutions that empower our
									military personnel.
								</p>
							</div>
						</div>
						<div
							style={{
								background: "url('/military.jpeg')",
								backgroundRepeat: "no-repeat",
								backgroundPosition: "center",
								backgroundSize: "cover",
								color: "white",
								backdropFilter: "brightness(30%)",
							}}>
							<div
								style={{
									backdropFilter: "brightness(35%)",
									width: "100%",
									height: "100%",
									margin: "0",
									padding: "0.1vw 1vw 0vw 1vw",
								}}>
								<h3>Military-Grade Quality:</h3>
								<p>
									{" "}
									Our unwavering commitment to quality ensures
									that our solutions are built to withstand
									the rigors of military operations.
								</p>
							</div>
						</div>
						<div
							style={{
								background: "url('army.png')",
								backgroundRepeat: "no-repeat",
								backgroundPosition: "center",
								backgroundSize: "cover",
								color: "white",
								backdropFilter: "brightness(30%)",
							}}>
							<div
								style={{
									backdropFilter: "brightness(35%)",
									width: "100%",
									height: "100%",
									margin: "0",
									padding: "0.1vw 1vw 0vw 1vw",
								}}>
								<h3>Collaborations with Armed Forces:</h3>
								<p>
									We have conducted successful trials and
									collaborations with elite units such as Para
									SF and other armed forces. These
									partnerships ensure our products are
									battle-tested and aligned with the
									real-world needs of our troops.
								</p>
							</div>
						</div>
						<div
							style={{
								background: "url('govt.jpeg')",
								backgroundRepeat: "no-repeat",
								backgroundPosition: "center",
								backgroundSize: "cover",
								color: "white",
								backdropFilter: "brightness(30%)",
							}}>
							<div
								style={{
									backdropFilter: "brightness(35%)",
									width: "100%",
									height: "100%",
									margin: "0",
									padding: "0.1vw 1vw 0vw 1vw",
								}}>
								<h3>Government Partnerships:</h3>
								<p>
									We work closely with government bodies,
									including Ordnance Factories, Defence Public
									Sector Undertakings (DPSUs), and other
									relevant authorities, to uphold
									military-grade quality and meet specific
									requirements. We are also in partnership
									with some top government institutions
								</p>
							</div>
						</div>
						<div
							style={{
								background: "url('map.avif')",
								backgroundRepeat: "no-repeat",
								backgroundPosition: "center",
								backgroundSize: "cover",
								color: "white",
								backdropFilter: "brightness(10%)",
							}}>
							<div
								style={{
									backdropFilter: "brightness(35%)",
									width: "100%",
									height: "100%",
									margin: "0",
									padding: "0.1vw 1vw 0vw 1vw",
								}}>
								<h3>Navigation and Communication Systems:</h3>
								<p>
									We are also engaged in the development of
									cutting-edge navigation and communication
									systems for elite soldiers like MARCOS and
									PARATROOPERS. These systems are designed to
									be used in combat and freefall missions,
									even in the most extreme conditions.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default HomePage;
