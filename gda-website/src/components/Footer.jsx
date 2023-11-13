import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
	
	return (
		<>
			<div className='footer-container'>
				<div className='left-foot'>
					<img src='/gda-logo.png' width={300} alt='' />
					<p>
						<b>Garg Defence and Aerospace Pvt. Ltd.</b> <br />
						DTU IIF, AB4 8th Floor, Delhi Technological University,
						Delhi - 110042
					</p>

					<p>
						Email :{" "}
						<a href='mailto:garvgarg111@gmail.com'>
							garvgarg111@gmail.com
						</a>{" "}
						<br />
						Phone: +91 9205443367
					</p>
				</div>

				<div className='right-foot'>
					<div className='socials-foot'>
						<a href='https://www.instagram.com/gargdefence/'>
							<img src='/instagram.png' alt='' />
						</a>
						<a href='http://'>
							<img src='/linkedin.png' alt='' />
						</a>
						<a href='http://'>
							<img src='twitter.png' alt='' />
						</a>
						<a href='http://'>
							<img src='/youtube.png' alt='' />
						</a>
					</div>
					<div className='footer-links'>
						<div className='right-sub-foot-1'>
							<Link to='/'>Home</Link>
							<Link to='/about'>About</Link>
						</div>
						<div className='right-sub-foot-2'>
							<Link to='/contact'>Contact</Link>
							<Link to='/products'>Products</Link>
						</div>
						<div className='right-sub-foot-3'>
							<Link to='/contact'>Careers</Link>
						</div>
					</div>
					<p>
						© 2023 Garg Defence and Aerospace Pvt. Ltd. <br /> All
						Rights Reserved.
					</p>
				</div>
			</div>
		</>
	);
};

export default Footer;
