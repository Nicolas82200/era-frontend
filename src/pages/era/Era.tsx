import type { periodsType } from "../../types/periodsType";
import styles from "./Era.module.css";
import "./Era.css";
import "./Era.module.css";
function Era({ period, nom }: { period: periodsType; nom: string }) {
	return (
		<section className="section_era">
			<p className={`${styles[nom]}-sectionBadge`}>{period.time.start}</p>
			<h2 className="section_era-title">{period.name}</h2>
			{/* <img src={period.image_logo} alt="" /> */}
			<p>{period.introduction}</p>
			<p>{period.description}</p>
		</section>
	);
}

export default Era;
