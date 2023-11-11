import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import { useState } from "react";

function App() {

	const [pathname, setPathname] = useState(
		window.location.pathname.split("/")[1]
	);

	return (
		<>
			<BrowserRouter>
				<NavBar pathname={pathname} setPathname={setPathname} />
				<Routes>
					<Route exact path='/' element={<HomePage setPathname={setPathname} />} />
					<Route exact path='/about' element={<AboutPage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
