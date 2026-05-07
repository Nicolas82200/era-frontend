import "./AccordionCards.css";
import type { eventsType } from "../../types/eventsType";

type AccordionCardsProps = {
	event: eventsType;
};

function AnimatedText({ text, delay = 1 }: { text: string; delay?: number }) {
	const words = text.split(" ");

	return (
		<>
			{words.map((word, wordIndex) => (
				<span key={word}>
					<span
						style={{
							display: "inline-block",
							whiteSpace: "nowrap",
							opacity: 0,
							animation: "fadeInUp 0.3s ease forwards",
							animationDelay: `${delay + wordIndex * 60}ms`,
						}}
					>
						{word}
					</span>
					{wordIndex < words.length - 1 && " "}
				</span>
			))}
		</>
	);
}

function getDelay(texts: string[], index: number, baseDelay: number): number {
	return texts
		.slice(0, index)
		.reduce((acc, text) => acc + text.length * 10, baseDelay);
}

function AccordionCards({ event }: AccordionCardsProps) {
	const baseDelay = 1200;

	const lines = [event.name, event.introduction, event.description];

	return (
		<article
			className={`accordion-content accordion-contentEra${event.periods.id}`}
		>
			<p style={{ opacity: 1, animation: "none" }}>
				{" "}
				<AnimatedText text={lines[1]} delay={getDelay(lines, 1, baseDelay)} />
			</p>
			<p style={{ opacity: 1, animation: "none" }}>
				{" "}
				<AnimatedText text={lines[2]} delay={getDelay(lines, 2, baseDelay)} />
			</p>
			<div style={{ flex: 1 }} />
			<p>Durée du voyage : {event.time_trip}</p>
			<p>
				{event.risque_level <= 5
					? `Dangerosité : ${event.risque_level}/5`
					: `Dangerosité : THREAT_LEVEL_CRITICAL`}
			</p>
			<p>Places restantes : {event.max_join}</p>
			<p>Prix : {event.price}€</p>
		</article>
	);
}

export default AccordionCards;
