import "./AccordionCards.css";
import type { eventsType } from "../../types/eventsType";
type AccordionCardsProps = {
	event: eventsType;
};

function AccordionCards({ event }: AccordionCardsProps) {
	return (
		<article
			className={`accordion-content accordion-contentEra${event.periods.id}`}
		>
			<h3 className={`accordionCardsTitle title-era${event.periods.id}`}>
				{event.name}
			</h3>
			<p className={`era${event.periods.id}`}>{event.introduction}</p>
			<p className={`era${event.periods.id}`}>{event.description}</p>
			<p className={`era${event.periods.id}`}>
				Durée du voyage : {event.time_trip}
			</p>
			<p className={`era${event.periods.id}`}>
				Dangerosité : {event.risque_level}/5
			</p>
			<p className={`era${event.periods.id}`}>
				Places restantes : {event.max_join}
			</p>
			<p className={`era${event.periods.id}`}>Prix : {event.price}€</p>
		</article>
	);
}

export default AccordionCards;
