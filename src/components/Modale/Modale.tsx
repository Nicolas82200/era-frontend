import { useState } from "react";
import "./Modale.css";
import Formulaire from "../Formulaire/Formulaire";

function Modale() {
	const [modalOpen, setModalOpen] = useState(false);

	return (
		<>
			{/* Bouton pour ouvrir la modale */}
			{/* <button type="button" onClick={() => setModalOpen(true)}>
				S'inscrire
			</button> */}

			{modalOpen && (
				<>
					{/* Overlay pour fermer en cliquant dehors */}
					<div className="Modale-overlay">
						<button type="button" onClick={() => setModalOpen(false)}></button>
					</div>

					{/* Contenu de la modale */}
					<div className="Modale-Global">
						<button
							type="button"
							className="Modale-Close"
							onClick={() => setModalOpen(false)}
						>
							✕
						</button>
						<Formulaire />
					</div>
				</>
			)}
		</>
	);
}

export default Modale;
