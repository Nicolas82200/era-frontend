import { Link, useLocation } from "react-router-dom";
import { useEra } from "../../contextTest/ContextTest";
import { eraIndexToCssClass } from "../../utils/eraMapping";
import "./NavBar.css";

function NavBar() {
  const location = useLocation();
  const { currentEraId, periods } = useEra();

  const getCurrentEra = () => {
    return periods?.find((p) => p.id === currentEraId);
  };

  const getCurrentCssClass = () => {
    if (location.pathname === "/") return "neutral";
    const era = getCurrentEra();
    if (!era) return "before-prehistory";
    const cssClass = eraIndexToCssClass[era.index_name];
    return cssClass || "before-prehistory";
  };

  const eraClass = getCurrentCssClass();

  return (
    <nav className="navBar-global">
      <Link to="/" className={`navBar-button ${eraClass}`}>
        <span className={`navBar-text-A ${eraClass}`}>E</span>
      </Link>
      <div className="navBar-text">
        <span className="navBar-text-B">ERA</span>
      </div>
    </nav>
  );
}

export default NavBar;
