import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import { useState } from "react";
import ContactPage from "./components/ContactPage";
import Footer from "./components/Footer";
import Product from "./components/Product";
import Careers from "./components/Careers";

function App() {
	const [pathname, setPathname] = useState(
		window.location.pathname.split("/")[1]
	);

	const [docHeight, setDocHeight] = useState(0);

	return (
		<>
			<BrowserRouter>
				<NavBar pathname={pathname} setPathname={setPathname} />
				<Routes>
					<Route
						exact
						path='/'
						element={
							<HomePage
								setPathname={setPathname}
								setDocHeight={setDocHeight}
							/>
						}
					/>
					<Route
						exact
						path='/about'
						element={<AboutPage setDocHeight={setDocHeight} />}
					/>
					<Route
						exact
						path='/contact'
						element={<ContactPage setDocHeight={setDocHeight} />}
					/>
					<Route
						exact
						path='/products'
						element={<Product setDocHeight={setDocHeight} />}
					/>
					<Route
						exact
						path='/careers'
						element={<Careers setDocHeight={setDocHeight} />}
					/>
				</Routes>
				<Footer docHeight={docHeight} setDocHeight={setDocHeight} />
			</BrowserRouter>
		</>
	);
}

export default App;
