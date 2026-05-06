import { Outlet } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";

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
		</>
	);
}

export default App;
