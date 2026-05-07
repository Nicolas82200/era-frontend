import { useEffect, useRef, useState } from "react";
import "./Accordion.css";
import type { eventsType } from "../../types/eventsType";
import AccordionCards from "../AccordionCards/AccordionCards";
import Modale from "../Modale/Modale";

export default function Accordion() {
	const [modalOpen, setModalOpen] = useState(false);
	const [events, setEvents] = useState<eventsType[]>([]);
	const [hovered, setHovered] = useState<string | null>(null);
	const [selectedPeriod, setSelectedPeriod] = useState<number | null>(null);
	const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
	const filteredEvents = selectedPeriod
		? events.filter((event) => event.periods.id === selectedPeriod)
		: events;
	useEffect(() => {
		setSelectedPeriod(1);
		fetch("http://localhost:3310/events")
			.then((res) => res.json())
			.then((data: eventsType[]) => setEvents(data));
	}, []);
	const handleMouseLeave = () => {
		hoverTimeoutRef.current = setTimeout(() => {
			setHovered(null);
		}, 500);
	};
	const handleMouseEnter = (name: string) => {
		if (hoverTimeoutRef.current) {
			clearTimeout(hoverTimeoutRef.current);
		}
		setHovered(name);
	};
	console.log(selectedPeriod);

	return (
		<section className="accordion-global">
			{/* Boutons temporaire pour changer d'époque */}
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

			<ul className="accordion" onMouseLeave={handleMouseLeave}>
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
							onMouseEnter={() => handleMouseEnter(event.name)}
							aria-label={event.name}
						>
							{hovered === event.name && <AccordionCards event={event} />}
							<img src={event.images} alt={event.name} />
							<div className={`accordion-div-text era${event.periods.id}`}>
								<p className={`accordion-text era${event.periods.id}`}>
									{event.name}
								</p>
								<button
									type="button"
									className={`button-era button-era${event.periods.id}`}
									onClick={(e) => {
										e.stopPropagation();
										setModalOpen(true);
									}}
								>
									Réserver
								</button>
							</div>
						</button>
					</li>
				))}
			</ul>
			<Modale modalOpen={modalOpen} onClose={() => setModalOpen(false)} />
		</section>
	);
}
