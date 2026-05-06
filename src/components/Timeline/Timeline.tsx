import { useState } from "react";
import "./Timeline.css";
import type { periodsType } from "../../types/periodsType";

const FAKE_PERIODS: periodsType[] = [
	{
		id: 1,
		name: "Origines",
		time: { start: "-3 300 000", end: "-700 000" },
		introduction: "",
		description: "",
		image: "",
		image_logo: "",
	},
	{
		id: 2,
		name: "Préhistoire",
		time: { start: "-700 000", end: "-3 000" },
		introduction: "",
		description: "",
		image: "",
		image_logo: "",
	},
	{
		id: 3,
		name: "Antiquité",
		time: { start: "-3 000", end: "476" },
		introduction: "",
		description: "",
		image: "",
		image_logo: "",
	},
	{
		id: 4,
		name: "Moyen Âge",
		time: { start: "476", end: "1492" },
		introduction: "",
		description: "",
		image: "",
		image_logo: "",
	},
	{
		id: 5,
		name: "Époque moderne",
		time: { start: "1492", end: "1789" },
		introduction: "",
		description: "",
		image: "",
		image_logo: "",
	},
	{
		id: 6,
		name: "Époque contemporaine",
		time: { start: "1789", end: "2025" },
		introduction: "",
		description: "",
		image: "",
		image_logo: "",
	},
	{
		id: 7,
		name: "Futur",
		time: { start: "2025+", end: "" },
		introduction: "",
		description: "",
		image: "",
		image_logo: "",
	},
];

const PERIOD_COLORS = [
	"--color-before-prehistory",
	"--color-prehistory",
	"--color-antiquity",
	"--color-middle-ages",
	"--color-early-modern",
	"--color-contemporary",
	"--color-future",
];

const FAKE_EMOJIS = ["🦴", "🔥", "⚡", "⚔️", "🌍", "⚙️", "🚀"];

function Timeline() {
	const [activeEraCard, setActiveEraCard] = useState(0);

	const progressPct =
		activeEraCard === 0
			? 7
			: Math.round((activeEraCard / (FAKE_PERIODS.length - 1)) * 100);

	function getState(i: number): "past" | "active" | "future" {
		if (i < activeEraCard) return "past";
		if (i === activeEraCard) return "active";
		return "future";
	}

	const cardWidth = 100 / FAKE_PERIODS.length;

	return (
		<nav className="timeline">
			<div className="timeline-progress">
				<div
					className="timeline-progress__fill"
					style={{ width: `${progressPct}%` }}
				/>
			</div>
			<div className="timeline-cards">
				<div
					className="timeline-active-bg"
					style={{
						left: `${activeEraCard * cardWidth}%`,
						width: `${cardWidth}%`,
						backgroundColor: `var(${PERIOD_COLORS[activeEraCard]})`,
					}}
				/>
				{FAKE_PERIODS.map((period, i) => (
					<button
						type="button"
						key={period.id}
						className={`timeline-card timeline-card--${getState(i)}`}
						onClick={() => setActiveEraCard(i)}
						style={
							{ "--color": `var(${PERIOD_COLORS[i]})` } as React.CSSProperties
						}
					>
						<div className="timeline-dot-wrapper">
							<div className={`timeline-dot timeline-dot--${getState(i)}`}>
								{getState(i) === "active" && <span>{FAKE_EMOJIS[i]}</span>}
								{getState(i) === "past" && <span>✓</span>}
							</div>
						</div>
						<p className="timeline-year">{period.time.start}</p>
						<p className="timeline-name">{period.name}</p>
					</button>
				))}
			</div>
		</nav>
	);
}

export default Timeline;
