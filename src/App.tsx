import { Outlet } from "react-router";
import Era from "./pages/era/Era";
import UsePeriods from "./services/UsePeriods";

function App() {
	const allPeriods = UsePeriods();

	return (
		<>
			<div>
				<Outlet />
			</div>
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
