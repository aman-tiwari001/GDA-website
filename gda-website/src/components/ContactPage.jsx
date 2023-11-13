import { useEffect } from "react";
import "./ContactPage.css";
import GoogleMapReact from "google-map-react";
import Footer from "./Footer";

const ContactPage = () => {
	const AnyReactComponent = ({ text }) => (
		<div style={{ fontSize: "1.4rem", fontWeight: "800" }}>{text}</div>
	);

	const defaultProps = {
		center: {
			lat: 28.750329568919067,
			lng: 77.11734473705292,
		},
		zoom: 16.5,
	};

	useEffect(() => {
		document.querySelector(".footer-container").style.top =
			document.documentElement.scrollHeight - 140 + "px";
	}, []);

	return (
		<>
			<div className='contact-container'>
				<h2 className='cont-head'>Contact</h2>
				<div className='contact-content'>
					<p>
						Join us in shaping the future of defence technology.
						Contact Garg Defence and Aerospace today to explore how
						our specialized drone solutions and advanced navigation
						and communication systems can strengthen your defence
						capabilities.
					</p>
					<h3>Reach out us at: </h3>
					<div className='email'>
						<span>
							Email:&nbsp;
							<a href='mailto:garvgarg111@gmail.com'>
								garvgarg111@gmail.com
							</a>
						</span>
						<span>Phone: +91 9205443367</span>
					</div>
					<div className='map'>
						<h3>Address : </h3>
						<p style={{ fontSize: "1.4rem" }}>
							DTU IIF, AB4 8th Floor, Delhi Technological
							University, Delhi - 110042
						</p>
						<div
							style={{
								height: "65vh",
								width: "100%",
								margin: "auto",
							}}>
							<GoogleMapReact
								bootstrapURLKeys={{ key: "" }}
								defaultCenter={defaultProps.center}
								defaultZoom={defaultProps.zoom}>
								<AnyReactComponent
									lat={28.750329568919067}
									lng={77.11734473705292}
									text='🎯 GDA'
								/>
							</GoogleMapReact>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default ContactPage;
