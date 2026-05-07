import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar({ activeIndex }: { activeIndex: number }) {
	console.log(activeIndex);

	return (
		<nav className="navBar-global">
			<Link to="/" className={`navBar-button navBar-button${activeIndex}`}>
				<span className={`navBar-text-A navBar-text-${activeIndex}`}>E</span>
			</Link>
			<div className="navBar-text">
				<span className={`navBar-text-${activeIndex}`}>ERA</span>
			</div>
		</nav>
	);
}

export default NavBar;
