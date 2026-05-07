import "./Modale.css";
import Formulaire from "../Formulaire/Formulaire";

function Modale({
	modalOpen,
	onClose,
}: {
	modalOpen: boolean;
	onClose: () => void;
}) {
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
						<button type="button" onClick={onClose} />
					</div>

					{/* Contenu de la modale */}
					<div className="Modale-Global">
						<button type="button" className="Modale-Close" onClick={onClose}>
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
