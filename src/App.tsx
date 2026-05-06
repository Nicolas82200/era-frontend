import { Outlet } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import LandingPage from "./pages/landingpage/LandingPage";

import "./App.css";

import "./index.css";

// import EpoquePage from "./pages/EpoquePage";

function App() {
	return (
		<>
			<nav>
				<NavBar />
			</nav>
			<main>
				<LandingPage />
				<Outlet />
			</main>
		</>
	);
}

export default App;
