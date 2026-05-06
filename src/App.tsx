import { Outlet } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Era from "./pages/era/Era";
import UsePeriods from "./services/UsePeriods";
import "./App.css";

import "./index.css";

function App() {
	const allPeriods = UsePeriods();
	return (
		<>
			<nav>
				<NavBar />
			</nav>
			<main>
				<Outlet />
			</main>
			<div>
				{allPeriods
					?.map((period) => (
						<Era key={period.id} period={period} nom={period.name} />
					))
					.slice(1, 2)}
			</div>
		</>
	);
}

export default App;
