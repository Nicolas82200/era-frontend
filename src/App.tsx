import { Outlet } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Timeline from "./components/Timeline/Timeline";
import { ActivePeriodsProvider } from "./context/PeriodsContext";
import "./App.css";

import "./index.css";

function App() {
	return (
		<ActivePeriodsProvider>
			<nav>
				<NavBar />
			</nav>
			<main>
				<Outlet />
			</main>
			<Timeline />
		</ActivePeriodsProvider>
	);
}

export default App;
