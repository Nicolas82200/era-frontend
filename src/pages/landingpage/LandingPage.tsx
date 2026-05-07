import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useEra } from "../../contextTest/ContextTest";

import Logo from "../../assets/images/company.png";
import voyage from "../../assets/images/voyage-temps.png";

import type { eventsType } from "../../types/eventsType";

import "./LandingPage.css";

function LandingPage() {
  const navigate = useNavigate();
  const { periods } = useEra(); // ← Depuis le Context
  const [events, setEvents] = useState<eventsType[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/events")
      .then((response) => response.json())
      .then(setEvents);
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
      <div className="LandingPage-SloganGlobal">
        <h2 className="LandingPage-SloganBegining">
          L'histoire ne se lit plus...
        </h2>
        <h2 className="LandingPage-SloganEnding">Elle se vit !</h2>
      </div>
      <div className="LandingPage-DescribeGlobal">
        <p className="LandingPage-Describe">
          De l'ère Précambriène à la conquête inter-galactique !
        </p>
        <p className="LandingPage-Describe">
          Revivez les grands évenements Terriens.
        </p>
      </div>
      <div className="LandingPage-CountersGlobal">
        <div className="LandingPage-Counters">
          <div className="LandingPage-Counter">
            <div className="LandingPage-CounterNumber">
              {periods?.length || 0}
            </div>
            <div className="LandingPage-CounterName">Époques</div>
          </div>
          <div className="LandingPage-Counter">
            <div className="LandingPage-CounterNumber">{events.length}</div>
            <div className="LandingPage-CounterName">Événements</div>
          </div>
        </div>
        <button
          className="LandingPage-Button"
          type="button"
          onClick={() => navigate("/era/")}
        >
          Commencez le voyage
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
