import "./Formulaire.css";
// import type from "../../types/periodsType";

// const periodColors: Record<number, string> = {
// 	1: "var(--color-before-prehistory)",
// 	2: "var(--color-prehistory)",
// 	3: "var(--color-antiquity)",
// 	4: "var(--color-middle-ages)",
// 	5: "var(--color-early-modern)",
// 	6: "var(--color-contemporary)",
// 	7: "var(--color-future)",
// };

function Formulaire() {
	return (
		<div className="Formulaire-Global">
			<p className="Formulaire-Describe">
				Afin de participer à l'évenement, veuillez compléter ce formulaire
			</p>
			<form className="Fomulaire-InputGlobal">
				<label className="Formulaire-Input">
					Nom : <input className="Fomulaire-InputCase" type="text" required />
				</label>
				<label className="Formulaire-Input">
					Prénom :
					<input className="Fomulaire-InputCase" type="text" required />
				</label>
				<label className="Formulaire-InputDate">
					Date de naissance :
					<input className="Fomulaire-InputCase" type="date" required />
				</label>
				<label className="Formulaire-InputMail">
					Adresse @mail :
					<input className="Fomulaire-InputCase" type="email" required />
				</label>
				<label className="Formulaire-InputDate">
					Date de depart :
					<input className="Fomulaire-InputCase" type="date" required />
				</label>
				<label className="Fomulaire-InputCGU">
					Validez les CGU <input type="checkbox" />
				</label>
				<div className="Fomulaire-ButtonGlobal">
					<input
						className="Fomulaire-Button"
						type="submit"
						value="Valider mon inscription"
					></input>
				</div>
			</form>
		</div>
	);
}

export default Formulaire;
