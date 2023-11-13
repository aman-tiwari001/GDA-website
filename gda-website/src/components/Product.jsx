import { useEffect } from "react";
import "./Product.css";
import Footer from "./Footer";

const Product = () => {
	useEffect(() => {
		document.querySelector(".footer-container").style.top =
			document.documentElement.scrollHeight + "px";
	}, []);

	return (
		<>
			<div className='product-container'>
				<h2>Products</h2>
				<div>
					<h2>1. Kamikaze drones : </h2>
					<img
						src='https://drishtiias.com/images/uploads/1666163685_Kamikaze_Drone_Drishti_IAS_English.png'
						alt=''
					/>
					<p>
						<ul>
							<li>
								<b>Precision Strikes: </b>Our kamikaze drones
								offer unmatched pinpoint accuracy in targeting,
								ensuring minimal collateral damage and maximum
								effectiveness.{" "}
							</li>
							<li>
								<b>Compact and Stealthy: </b>These drones are
								designed to be compact and stealthy, allowing
								them to approach targets undetected. Ex: Speed =
								Up to 150kmph Quadcopter Size = 22cm
								(Diagonally) Ammunition Payload = 350g – 700g
								(Other customisable variants are also available
								in this category ranges from 350g to 4500g
								ammunition payload and many more).{" "}
							</li>
							<li>
								<b>Rapid Response: </b>Kamikaze drones can be
								deployed rapidly in critical situations,
								providing swift response capabilities.{" "}
							</li>
							<li>
								<b>Multiple Launch Platforms: </b>Our Drones are
								designed to be launched from a variety of
								platforms, including ground-based systems,
								aircraft, and ships, increasing their
								flexibility in deployment{" "}
							</li>
						</ul>
					</p>
				</div>
				<div>
					<h2>2. Loitering munitions : </h2>
					<img
						src='https://alphadefense.in/wp-content/uploads/2023/09/KK-1.jpeg'
						alt=''
					/>
					<p>
						<ul>
							<li>
								{" "}
								<b>Endurance: </b>Our loitering munitions have
								extended flight times, offering prolonged
								surveillance and strike capabilities.{" "}
							</li>
							<li>
								{" "}
								<b>Versatility: </b>They are highly versatile
								and can perform intelligence, surveillance,
								reconnaissance (ISR), and strike missions in a
								single platform.{" "}
							</li>
							<li>
								<b>Autonomous Intelligence: </b>Loitering
								munitions are equipped with advanced autonomous
								intelligence, making them adaptive and
								responsive to changing mission requirements.{" "}
							</li>
							<li>
								<b>Manoeuvrability: </b> These drones are highly
								manoeuvrable, capable of navigating complex
								environments and effectively engaging moving
								targets{" "}
							</li>
						</ul>
					</p>
				</div>
				<div>
					<h2>3. Anti-tank drone : </h2>
					<img
						src='https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/newscms/2018_33/2536566/180819-drone-hunter-se-907p.jpg'
						alt=''
					/>
					<p>
						Anti-tank drones, also known as loitering munitions or
						kamikaze drones, are unmanned aerial vehicles (UAVs)
						specifically designed to target and destroy enemy tanks
						or armored vehicles. These drones are equipped with
						explosive payloads and are capable of precision strikes
						against ground targets. They are often used in military
						operations for reconnaissance, surveillance, and
						tactical strikes. Anti-tank drones typically have the
						ability to loiter in the air for an extended period,
						allowing operators to identify and engage targets
						effectively. They can be remotely controlled or operate
						autonomously with pre-programmed instructions.
					</p>
				</div>
				<div>
					<h2>4. Surveillance drones : </h2>
					<img
						src='https://reolink.com/images/blog/home-security/drone-quadcopter-for-scientific-research.jpg'
						alt=''
					/>
					<p>
						Surveillance drones, also known as reconnaissance or
						UAVs, are unmanned aircraft used for monitoring and
						collecting information. These drones are equipped with
						cameras, sensors, and other technologies to capture
						images, videos, and data from the air. Surveillance
						drones have a wide range of applications, including
						military reconnaissance, border patrol, disaster
						response, agriculture, and law enforcement. The primary
						purpose of surveillance drones is to provide real-time
						or near-real-time information from aerial perspectives,
						enhancing situational awareness and decision-making.
						These drones are often used for monitoring large areas,
						tracking movements, and gathering intelligence without
						putting human operators at risk.
					</p>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Product;
