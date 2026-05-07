import { useActivePeriods } from "../../context/PeriodsContext";
import UsePeriods from "../../services/UsePeriods";
import type { periodsType } from "../../types/periodsType";
// import prehistoireImg from "../../assets/images/PrehistoryImg.png";
import "./Era.css";

function Era() {
	const allPeriods = UsePeriods();
	const { activePeriodsId, setActivePeriodsId } = useActivePeriods();

	if (!allPeriods) {
		return <div>Loading...</div>;
	}

	const actualPeriod: periodsType = allPeriods[activePeriodsId];

	return (
		<>
			{allPeriods
				?.map((period) => (
					<section key={period.id} className={`${period.name}-section_era`}>
						<p className={`${period.name}-sectionBadge`}>{period.time.start}</p>
						<div className="div_era">
							<h2 className="section_era-title">{period.name}</h2>
							<p>{period.introduction}</p>
						</div>
					</section>
				))
				.slice(1, 2)}
		</>
	);
}

export default Era;
