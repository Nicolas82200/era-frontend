import { useEffect, useState } from "react";
import type { periodsType } from "../../types/periodsType";
import "./Timeline.css";

// Chaque index correspond à une époque dans l'ordre
const PERIOD_COLORS = [
	"--color-before-prehistory",
	"--color-prehistory",
	"--color-antiquity",
	"--color-middle-ages",
	"--color-early-modern",
	"--color-contemporary",
	"--color-future",
];

// En attendant le hook de Léo : fake emoji
const FAKE_EMOJIS = ["🦴", "🔥", "⚡", "⚔️", "🌍", "⚙️", "🚀"];

function Timeline() {
	// On se débrouille car Léo veut pas donner son fetch
	const [periods, setPeriods] = useState<periodsType[]>([]);

	useEffect(() => {
		fetch("http://localhost:3310/periods")
			.then((res) => res.json())
			.then((data) => setPeriods(data));
	}, []);

	// useState qui choppe l'index de la carte active, valeur initial à 0 poru la première ERA
	const [activeEraCard, setActiveEraCard] = useState(0);

	// Petit calcul JS pour faire la progression de la bordure haute :
	// donc periods.length - 1, on a 7 périodes - 1 = 6 (-1 car les index commence à 0 et pas 1)
	// on divise donc la position active par 6 (et on fait *100 pour avoir un %)
	const progressPct =
		activeEraCard === 0
			? 7
			: // Math.round pour faire un arrondi
				Math.round((activeEraCard / (periods.length - 1)) * 100);

	// Permet d'obtenir le statut de la carte pour le CSS:

	// Donc on commence avec useState qui donne activeEraCard à 0.
	// Quand on clique sur une carte, onClick déclenche setActiveEraCard(i)
	// ce qui met à jour le state et re-rend le composant.
	// À chaque re-render, getState est appelée pour chaque carte via le .map()
	// Elle compare l'index 'i' de la carte avec activeEraCard
	// pour déterminer si la carte est "past", "active" ou "future".
	function getState(i: number): "past" | "active" | "future" {
		if (i < activeEraCard) return "past";
		if (i === activeEraCard) return "active";
		return "future";
	}

	// Connaître la largeur des cards pour faire glisser le fond coloré
	const cardWidth = 100 / periods.length;

	return (
		<nav className="timeline">
			{/* La fameuse barre de progression */}
			<div className="timeline-progress">
				<div
					// Le remplissage de la barre de progression avec un calcul dynamioque de la largeur
					// genre si je clique sur la carte 4 donne genre 50% donc la barre progress
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
				{/* Pour chaque period donne tous l'object et son index */}
				{periods.map((period, i) => (
					<button
						type="button"
						key={period.id}
						// Classe dynamique selon l'état géré via getState
						className={`timeline-card timeline-card--${getState(i)}`}
						onClick={() => setActiveEraCard(i)}
						style={
							// classe dynamique grâce à period_colors qui récupère l'index
							{ "--color": `var(${PERIOD_COLORS[i]})` } as React.CSSProperties
						}
					>
						<div className="timeline-dot-wrapper">
							{/* Si 'actif' emoji, si 'past' coche, si 'future' vide. */}
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
