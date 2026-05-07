import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Timeline from "./components/Timeline/Timeline";
import { ActivePeriodsProvider } from "./context/PeriodsContext";
import "./App.css";

import "./index.css";

function App() {
	// Stock l'index de l'époque active pour donner aux enfants
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<ActivePeriodsProvider>
			<nav>
				<NavBar />
			</nav>
			<main>
				<Outlet />
			</main>
			<Timeline activeIndex={activeIndex} onSelect={setActiveIndex} />
		</ActivePeriodsProvider>
	);
}

export default App;
