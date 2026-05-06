import "./Timeline.css";

function Timeline() {
	return (
		<nav className="timeline">
			<div className="timeline-card">
				<div className="timeline-dot">
					<span>🦴</span>
				</div>
				<p className="timeline-year">-3 300 000</p>
				<p className="timeline-name">Origines</p>
			</div>
			<div className="timeline-card">
				<div className="timeline-dot">
					<span>🔥</span>
				</div>
				<p className="timeline-year">-700 000</p>
				<p className="timeline-name">Préhistoire</p>
			</div>
			<div className="timeline-card">
				<div className="timeline-dot">
					<span>⚡</span>
				</div>
				<p className="timeline-year">-3 000</p>
				<p className="timeline-name">Antiquité</p>
			</div>
		</nav>
	);
}

export default Timeline;
