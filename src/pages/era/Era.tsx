import { useActivePeriods } from "../../context/PeriodsContext";
import UsePeriods from "../../services/UsePeriods";
import type { periodsType } from "../../types/periodsType";
import "./Era.css";

function Era() {
	const allPeriods = UsePeriods();
	const { activePeriodsId, setActivePeriodsId } = useActivePeriods();

	if (!allPeriods) {
		return <div>Loading...</div>;
	}

	const actualPeriod: periodsType = allPeriods[activePeriodsId];

	return (
		<div className="test">
			<section key={actualPeriod.id} className="section_era">
				<p className={`${actualPeriod.name}-sectionBadge`}>
					{actualPeriod.time.start}
				</p>
				<h2 className="section_era-title">{actualPeriod.name}</h2>
				<p>{actualPeriod.introduction}</p>
				<p>{actualPeriod.description}</p>
			</section>
		</div>
	);
}

export default Era;
