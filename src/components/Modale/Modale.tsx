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
					<div className="Modale-Overlay">
						<button
							className="Modale-OverlayButton"
							type="button"
							onClick={onClose}
						/>

						{/* Contenu de la modale */}
						<div className="Modale-Global">
							<button type="button" className="Modale-Close" onClick={onClose}>
								✕
							</button>
							<Formulaire />
						</div>
					</div>
				</>
			)}
		</>
	);
}

export default Modale;
