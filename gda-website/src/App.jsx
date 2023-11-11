import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import { useState } from "react";
import ContactPage from "./components/ContactPage";
import Footer from "./components/Footer";
import Product from "./components/Product";

function App() {
	const [pathname, setPathname] = useState(
		window.location.pathname.split("/")[1]
	);

	return (
		<>
			<BrowserRouter>
				<NavBar pathname={pathname} setPathname={setPathname} />
				<Routes>
					<Route
						exact
						path='/'
						element={<HomePage setPathname={setPathname} />}
					/>
					<Route exact path='/about' element={<AboutPage />} />
					<Route exact path='/contact' element={<ContactPage />} />
					<Route exact path='/products' element={<Product />} />
				</Routes>
				{/* <Footer /> */}
			</BrowserRouter>
		</>
	);
}

export default App;
