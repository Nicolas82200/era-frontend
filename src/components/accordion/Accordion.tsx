import { useEffect, useState } from "react";
import "./Accordion.css";
import type { eventsType } from "../../types/eventsType";

export default function Accordion() {
	const [events, setEvents] = useState<eventsType[]>([]);
	const [hovered, setHovered] = useState<string | null>(null);
	const [selectedPeriod, setSelectedPeriod] = useState<number | null>(null);

	const filteredEvents = selectedPeriod
		? events.filter((event) => event.periods.id === selectedPeriod)
		: events;
	useEffect(() => {
		fetch("http://localhost:3310/events")
			.then((res) => res.json())
			.then((data: eventsType[]) => setEvents(data));
	}, []);

	console.log(selectedPeriod);

	return (
		//Boutons temporaire pour changer d'époque
		<section>
			<div className="filters">
				<button type="button" onClick={() => setSelectedPeriod(1)}>
					Phanérozoïque
				</button>
				<button type="button" onClick={() => setSelectedPeriod(2)}>
					Préhistoire
				</button>
				<button type="button" onClick={() => setSelectedPeriod(3)}>
					Antiquité
				</button>
				<button type="button" onClick={() => setSelectedPeriod(4)}>
					Moyen-Age
				</button>
				<button type="button" onClick={() => setSelectedPeriod(5)}>
					Age moderne
				</button>
				<button type="button" onClick={() => setSelectedPeriod(6)}>
					age contemporain
				</button>
				<button type="button" onClick={() => setSelectedPeriod(7)}>
					Futur
				</button>
			</div>

			<ul className="accordion" onMouseLeave={() => setHovered(null)}>
				{filteredEvents.map((event) => (
					<li
						key={event.id}
						className={`accordion-card ${
							hovered === event.name
								? "active"
								: hovered !== null
									? "shrink"
									: ""
						}`}
					>
						<button
							type="button"
							className={`accordion-btn era${event.periods.id}`}
							onMouseEnter={() => setHovered(event.name)}
							aria-label={event.name}
						>
							<img src={event.images} alt={event.name} />
							<div className={`accordion-div-text era${event.periods.id}`}>
								<p className={`accordion-text era${event.periods.id}`}>
									{event.name}
								</p>
							</div>
						</button>
					</li>
				))}
			</ul>
		</section>
	);
}
