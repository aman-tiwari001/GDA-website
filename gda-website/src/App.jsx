import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import { useState } from "react";
import ContactPage from "./components/ContactPage";
import Product from "./components/Product";
import Careers from "./components/Careers";

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
					<Route exact path='/careers' element={<Careers />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
