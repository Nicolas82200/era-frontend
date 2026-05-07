import Accordion from "../../components/accordion/Accordion";
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
	if (activePeriodsId === 0) {
		setActivePeriodsId(1);
		return console.log("Incorect");
	}
	const actualPeriod: periodsType = allPeriods[activePeriodsId - 1];

	return (
		<>
			<section
				key={actualPeriod.id}
				className={`${actualPeriod.name}-section_era`}
			>
				<p className={`${actualPeriod.name}-sectionBadge`}>
					{actualPeriod.time.start}
				</p>
				<div className="div_era">
					<h2 className="section_era-title">{actualPeriod.name}</h2>
					<p>{actualPeriod.introduction}</p>
				</div>
			</section>

			<Accordion />
		</>
	);
}

export default Era;
