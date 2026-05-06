import { Outlet } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Timeline from "./components/Timeline/Timeline";
import "./App.css";

import "./index.css";

function App() {
	return (
		<>
			<nav>
				<NavBar />
			</nav>
			<main>
				<Outlet />
			</main>
			<Timeline />
		</>
	);
}

export default App;
