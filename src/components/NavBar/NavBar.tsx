import "./NavBar.css";

interface NavBarProps {
  currentEra?: string;
}

function NavBar({ currentEra = "before-prehistory" }: NavBarProps) {
  return (
    <nav className="navBar-global">
      <button type="button" className={`navBar-button ${currentEra}`}>
        E
      </button>
      <div className="navBar-text">
        <span className={`navBar-text-A ${currentEra}`}>E</span>
        <span className={`navBar-text-B ${currentEra}`}>RA</span>
      </div>
    </nav>
  );
}

export default NavBar;
