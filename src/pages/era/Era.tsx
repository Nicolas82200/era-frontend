import { useEffect, useRef } from "react";
import { useOutletContext } from "react-router-dom";
import Accordion from "../../components/accordion/Accordion";
import UsePeriods from "../../services/UsePeriods";
import "./Era.css";

function Era() {
	const { activeIndex, setActiveIndex } = useOutletContext<{
		activeIndex: number;
		setActiveIndex: (i: number) => void;
	}>();
	const allPeriods = UsePeriods();
	const containerRef = useRef<HTMLDivElement>(null);
	console.log(activeIndex);
	const handleWheel = (e: React.WheelEvent) => {
		if (e.deltaX > 0 || e.deltaY > 0) {
			setActiveIndex(Math.min(activeIndex + 1, allPeriods?.length ?? 7));
		} else {
			setActiveIndex(Math.max(activeIndex - 1, 1));
		}
	};
	useEffect(() => {
		if (containerRef.current) {
			const sectionWidth = containerRef.current.clientWidth;
			containerRef.current.scrollTo({
				left: (activeIndex - 1) * sectionWidth,
				behavior: "smooth",
			});
		}
	}, [activeIndex]);
	console.log(allPeriods);
	return (
		<div
			ref={containerRef}
			className="era-scroll-container"
			onWheel={handleWheel}
			style={{
				display: "flex",
				flexDirection: "row",
				width: "100vw",
				scrollSnapType: "x mandatory",
			}}
		>
			{allPeriods?.map((period) => (
				<section
					key={period.id}
					style={{ minWidth: "100vw", scrollSnapAlign: "start" }}
					className="section_era-container"
				>
					<section className={`${period.index_name}-section_era`}>
						<img
							className={`era-img ${period.index_name}-section_era-img`}
							src={period.image || undefined}
							alt={period.name}
						/>
						<p className={`${period.index_name}-sectionBadge`}>
							{period.time.start}
						</p>
						<div className="div_era">
							<h2 className={`${period.index_name}-section_era-title`}>
								{period.name}
							</h2>
							<p className={`${period.index_name}-section_era-desc`}>
								{period.introduction}
							</p>
						</div>
						<Accordion activeIndex={period.id} />
					</section>
				</section>
			))}
		</div>
	);
}

export default Era;
