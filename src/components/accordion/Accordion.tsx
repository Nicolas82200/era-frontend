import { useEffect, useRef, useState } from "react";
import type { eventsType } from "../../types/eventsType";
import AccordionCards from "../AccordionCards/AccordionCards";
import Modale from "../Modale/Modale";
import "./Accordion.css";
interface TimelineProps {
	activeIndex: number;
}
export default function Accordion({ activeIndex }: TimelineProps) {
	const [modalOpen, setModalOpen] = useState(false);
	const [events, setEvents] = useState<eventsType[]>([]);
	const [hovered, setHovered] = useState<string | null>(null);
	const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
	const filteredEvents = activeIndex
		? events.filter((event) => event.periods.id === activeIndex)
		: events;
	useEffect(() => {
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
	console.log(filteredEvents);
	return (
		<section className="accordion-global">
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
