import { useEffect, useRef } from "react";
import { useEra } from "../../contextTest/ContextTest";
import Accordion from "../../components/accordion/Accordion";
import "./Era.css";

type Period = {
  id: number;
  name: string;
  time_start: string;
  time_end: string;
  introduction: string;
  description: string;
  index_name: string;
  image?: string;
};

function Era() {
  const { periods, setCurrentEraId } = useEra();
  const periodsRef = useRef<Period[]>([]);
  const currentIndexRef = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastScrollRef = useRef(0);

  useEffect(() => {
    if (periods) {
      periodsRef.current = periods;
      setCurrentEraId(periods[0].id);
    }
  }, [periods, setCurrentEraId]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const now = Date.now();
      if (now - lastScrollRef.current < 100) return;
      lastScrollRef.current = now;

      const periodsData = periodsRef.current;
      if (periodsData.length === 0) return;

      const delta = e.deltaY || e.deltaX;

      if (delta > 50) {
        const next = Math.min(
          currentIndexRef.current + 1,
          periodsData.length - 1,
        );
        container.scrollTo({
          left: next * window.innerWidth,
          behavior: "smooth",
        });
        setCurrentEraId(periodsData[next].id);
        currentIndexRef.current = next;
      } else if (delta < -50) {
        const next = Math.max(currentIndexRef.current - 1, 0);
        container.scrollTo({
          left: next * window.innerWidth,
          behavior: "smooth",
        });
        setCurrentEraId(periodsData[next].id);
        currentIndexRef.current = next;
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, [setCurrentEraId]);

  if (!periods) return null;

  return (
    <>
      <div className="era-container" ref={containerRef}>
        {periods.map((period) => (
          <section
            key={period.id}
            data-era-id={period.id}
            className={`section_era ${period.index_name}-section_era`}
          >
            {period.image && (
              <img
                className={`era-img ${period.index_name}-section_era-img`}
                src={period.image}
                alt={period.name}
              />
            )}
            <p className={`section-badge ${period.index_name}-sectionBadge`}>
              {period.time_start}
            </p>
            <div className="div_era">
              <h2
                className={`section_era-title ${period.index_name}-section_era-title`}
              >
                {period.name}
              </h2>
              <p
                className={`section_era-desc ${period.index_name}-section_era-desc`}
              >
                {period.introduction}
              </p>
            </div>
          </section>
        ))}
      </div>
      <Accordion />
    </>
  );
}

export default Era;
