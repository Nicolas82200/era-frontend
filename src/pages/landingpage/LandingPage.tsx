import { useState, useEffect } from "react";

import Logo from "../../assets/images/company.png";
import voyage from "../../assets/images/voyage-temps.png";

import "./LandingPage.css";

import type { periodsType } from "../../types/periodsType";
// import { eventsType } from "../../types/eventsType";

function LandingPage() {
	const [periods, setPeriods] = useState<periodsType[]>([]);
	// const [events, setEvents] = useState<eventsType[]>([]);

	useEffect(() => {
		fetch("http://localhost:3310/periods").then((response) =>
			response.json().then(setPeriods),
		);
		// fetch("http://localhost:3310/events").then((response) => response.json().then(setEvents));
	}, []);

	return (
		<div className="LandingPage-Global">
			<div className="LandingPage-Background">
				<img
					className="LandingPage-BackgroundImg"
					src={voyage}
					alt="spirale du temps"
				/>
			</div>
			<div className="LandingPage-ContainerLogo">
				<img className="LandingPage-Logo" src={Logo} alt="Era logo" />
			</div>
			<h1 className="LandingPage-Slogan">
				L'histoire ne se lit plus, elle se vit !
			</h1>
			<p className="LandingPage-Describe">
				De l'ère Precambriène à la conquête inter-galactique ! Revivez les
				grands évenements Terriens.
			</p>
			<div className="LandingPage-Counters">
				<div className="LandingPage-Counter">
					<div className="LandingPage-CounterNumber">{periods.length}</div>
					<div className="LandingPage-CounterName">Époques</div>
				</div>
			</div>
			{/* <div className="LandingPage-Counter">
				<div className="LandingPage-CounterNumber">{events.length}</div>
				<div className="LandingPage-CounterName">Événements</div>
			</div> */}
		</div>
	);
}

export default LandingPage;
