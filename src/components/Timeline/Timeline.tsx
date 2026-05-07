import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import type { periodsType } from "../../types/periodsType";
import "./Timeline.css";

interface TimelineProps {
	activeIndex: number;
	onSelect: (i: number) => void;
}

const PERIOD_COLORS = [
	"--color-neutral",
	"--color-before-prehistory",
	"--color-prehistory",
	"--color-antiquity",
	"--color-middle-ages",
	"--color-early-modern",
	"--color-contemporary",
	"--color-future",
];

function Timeline({ activeIndex, onSelect }: TimelineProps) {
	const navigate = useNavigate();

	const [periods, setPeriods] = useState<periodsType[]>([]);

	useEffect(() => {
		fetch("http://localhost:3310/periods")
			.then((res) => res.json())
			.then((data) => setPeriods(data));
	}, []);

	// On ajoute la carte Accueil au début manuellement
	const allCards = [
		{
			id: 0,
			name: "Accueil",
			time: { start: ".", end: "" },
			image_logo: "🏠",
			introduction: "",
			description: "",
			image: null,
			index_name: "",
		},
		...periods,
	];

	// activeIndex vient maintenant des props d'App.tsx
	// c'est App.tsx qui gère la mémoire de l'index actif
	// et le partage entre Timeline et le carrousel d'Era

	const progressPct =
		activeIndex === 0 ? 7 : Math.round((activeIndex / periods.length) * 100);

	function getState(i: number): "past" | "active" | "future" {
		if (i < activeIndex) return "past";
		if (i === activeIndex) return "active";
		return "future";
	}

	const cardWidth = 100 / allCards.length;

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
						left: `${activeIndex * cardWidth}%`,
						width: `${cardWidth}%`,
						backgroundColor: `var(${PERIOD_COLORS[activeIndex]})`,
					}}
				/>
				{allCards.map((period, i) => (
					<button
						type="button"
						key={period.id}
						className={`timeline-card timeline-card--${getState(i)}`}
						onClick={() => {
							if (i === 0) {
								navigate("/");
								onSelect(0); // active visuellement la carte Accueil
							} else {
								onSelect(i);
							}
						}}
						style={
							{ "--color": `var(${PERIOD_COLORS[i]})` } as React.CSSProperties
						}
					>
						<div className="timeline-dot-wrapper">
							<div className={`timeline-dot timeline-dot--${getState(i)}`}>
								{getState(i) === "active" &&
									(i === 0 ? (
										<span>🏠</span>
									) : (
										<img
											src={period.image_logo}
											alt={period.name}
											width={24}
											height={24}
										/>
									))}
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
