import { useState } from "react";
import "./Accordion.css";
import earlyFire from "../../assets/images/earlyFire.png";
import earlyPottery from "../../assets/images/earlyPottery.png";
import lascauxCavePaintings from "../../assets/images/lascauxCavePaintings.png";
import mammouthHunt from "../../assets/images/mammouthHunt.png";
import stonehenge from "../../assets/images/Stonehenge.png";

interface AccordionImage {
	era: string;
	src: string;
	alt: string;
}

const images: AccordionImage[] = [
	{ era: "medieval", src: earlyFire, alt: "Early fire" },
	{ era: "medieval", src: earlyPottery, alt: "Early pottery" },
	{
		era: "medieval",
		src: lascauxCavePaintings,
		alt: "Lascaux cave paintings",
	},
	{ era: "medieval", src: mammouthHunt, alt: "Mammoth hunt" },
	{ era: "medieval", src: stonehenge, alt: "Stonehenge" },
];

export default function Accordion() {
	const [hovered, setHovered] = useState<string | null>(null);

	return (
		<ul className="accordion" onMouseLeave={() => setHovered(null)}>
			{images.map(({ src, alt, era }) => (
				<li
					key={alt}
					className={`acc-card ${hovered === alt ? "active" : hovered !== null ? "shrink" : ""}`}
				>
					<button
						type="button"
						className={`acc-btn ${era}`}
						onMouseEnter={() => setHovered(alt)}
						aria-label={alt}
					>
						<img src={src} alt={alt} />
						<p className="text">{alt}</p>
					</button>
				</li>
			))}
		</ul>
	);
}
