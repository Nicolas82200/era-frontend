import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Timeline from "./components/Timeline/Timeline";
import "./App.css";

import "./index.css";

function App() {
	// Stock l'index de l'époque active pour donner aux enfants
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<>
			<nav>
				<NavBar activeIndex={activeIndex} />
			</nav>
			<main>
				<Outlet context={{ activeIndex, setActiveIndex }} />
			</main>
			<footer>
				<Timeline activeIndex={activeIndex} onSelect={setActiveIndex} />
			</footer>
		</>
	);
}

export default App;
