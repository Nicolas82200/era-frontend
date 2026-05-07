import { useState } from "react";
import UsePeriods from "../../services/UsePeriods";
// import prehistoireImg from "../../assets/images/PrehistoryImg.png";
import "./Era.css";
import Accordion from "../../components/accordion/Accordion";
interface TimelineProps {
	activeIndex: number;
}
function Era({ activeIndex }: TimelineProps) {
	const [eraId, setEraId] = useState<number>();
	const allPeriods = UsePeriods();
	const id = allPeriods?.map((periods) => periods.id);

	// const carousel = allPeriods?.filter((periods) => periods.id);
	console.log(id);
	// allPeriods?.map();
	// setEraId();

	return (
		<>
			{allPeriods?.map((period) => (
				<section key={period.id} className="section_era-container">
					<section className={`${period.index_name}-section_era`}>
						<img
							className={`era-img ${period.index_name}-section_era-img`}
							src={period.image || undefined}
							alt={period.name}
						/>
						<p className={`${period.index_name}-sectionBadge`}>
							{period.time.start}
						</p>
						<div className="div_era">
							<h2 className={`${period.index_name}-section_era-title`}>
								{period.name}
							</h2>
							<p className={`${period.index_name}-section_era-desc`}>
								{period.introduction}
							</p>
						</div>
						<Accordion activeIndex={activeIndex} />
					</section>
				</section>
			))}
		</>
	);
}

export default Era;
