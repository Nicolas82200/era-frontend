import UsePeriods from "../../services/UsePeriods";
import styles from "./Era.module.css";
import "./Era.css";

function Era() {
	const allPeriods = UsePeriods();

	return (
		<>
			{allPeriods
				?.map((period) => (
					<section key={period.id} className="section_era">
						<p className={`${styles[period.name]}-sectionBadge`}>
							{period.time.start}
						</p>
						<h2 className="section_era-title">{period.name}</h2>
						<p>{period.introduction}</p>
						<p>{period.description}</p>
					</section>
				))
				.slice(0, 1)}
		</>
	);
}

export default Era;
