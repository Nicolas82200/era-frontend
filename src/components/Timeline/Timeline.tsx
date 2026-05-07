import { useNavigate } from "react-router-dom";
import { useEra } from "../../contextTest/ContextTest";
import "./Timeline.css";

const PERIOD_COLORS = [
  "--color-neutral",
  "--color-before-prehistory",
  "--color-prehistory",
  "--color-antiquity",
  "--color-middle-ages",
  "--color-early-modern",
  "--color-contemporary",
  "--color-future",
];

function Timeline() {
  const navigate = useNavigate();
  const { periods, currentEraId, setCurrentEraId } = useEra();

  if (!periods) return null;

  // Carte Accueil au début
  const allCards = [
    {
      id: 0,
      name: "Accueil",
      time_start: ".",
      time_end: "",
      image_logo: "🏠",
      introduction: "",
      description: "",
      image: null,
      index_name: "",
    },
    ...periods,
  ];

  // activeIndex basé sur currentEraId
  const activeIndex =
    currentEraId === 0
      ? 0
      : allCards.findIndex((card) => card.id === currentEraId);

  const progressPct =
    activeIndex === 0 ? 7 : Math.round((activeIndex / periods.length) * 100);

  function getState(i: number): "past" | "active" | "future" {
    if (i < activeIndex) return "past";
    if (i === activeIndex) return "active";
    return "future";
  }

  const cardWidth = 100 / allCards.length;

  return (
    <nav className="timeline">
      <div className="timeline-progress">
        <div
          className="timeline-progress__fill"
          style={{ width: `${progressPct}%` }}
        />
      </div>
      <div className="timeline-cards">
        <div
          className="timeline-active-bg"
          style={{
            left: `${activeIndex * cardWidth}%`,
            width: `${cardWidth}%`,
            backgroundColor: `var(${PERIOD_COLORS[activeIndex]})`,
          }}
        />
        {allCards.map((period, i) => (
          <button
            type="button"
            key={period.id}
            className={`timeline-card timeline-card--${getState(i)}`}
            onClick={() => {
              if (i === 0) {
                navigate("/");
                setCurrentEraId(0);
              } else {
                setCurrentEraId(period.id);
              }
            }}
            style={
              { "--color": `var(${PERIOD_COLORS[i]})` } as React.CSSProperties
            }
          >
            <div className="timeline-dot-wrapper">
              <div className={`timeline-dot timeline-dot--${getState(i)}`}>
                {getState(i) === "active" &&
                  (i === 0 ? (
                    <span>🏠</span>
                  ) : period.image_logo ? (
                    <img
                      src={period.image_logo}
                      alt={period.name}
                      width={24}
                      height={24}
                    />
                  ) : (
                    <span>●</span>
                  ))}
                {getState(i) === "past" && <span>✓</span>}
              </div>
            </div>
            <p className="timeline-year">{period.time_start}</p>
            <p className="timeline-name">{period.name}</p>
          </button>
        ))}
      </div>
    </nav>
  );
}

export default Timeline;
