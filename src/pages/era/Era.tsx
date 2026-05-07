import UsePeriods from "../../services/UsePeriods";
// import prehistoireImg from "../../assets/images/PrehistoryImg.png";
import "./Era.css";

function Era() {
	const allPeriods = UsePeriods();

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
