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
	{ era: "prehistoric", src: earlyFire, alt: "EARLY FIRE" },
	{ era: "prehistoric", src: earlyPottery, alt: "EARLY POTTERY" },
	{
		era: "prehistoric",
		src: lascauxCavePaintings,
		alt: "LASCAUX CAVE PAINTINGS",
	},
	{ era: "prehistoric", src: mammouthHunt, alt: "MAMMOTH HUNT" },
	{ era: "prehistoric", src: stonehenge, alt: "STONEHENGE" },
];

export default function Accordion() {
	const [hovered, setHovered] = useState<string | null>(null);

	return (
		<ul className="accordion" onMouseLeave={() => setHovered(null)}>
			{images.map(({ src, alt, era }) => (
				<li
					key={alt}
					className={`accordion-card ${hovered === alt ? "active" : hovered !== null ? "shrink" : ""}`}
				>
					<button
						type="button"
						className={`accordion-btn ${era}`}
						onMouseEnter={() => setHovered(alt)}
						aria-label={alt}
					>
						<img src={src} alt={alt} />
						<div className={`accordion-div-text ${era}`}>
							<p className={`accordion-text ${era}`}>{alt}</p>
						</div>
					</button>
				</li>
			))}
		</ul>
	);
}
