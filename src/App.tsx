import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import "./index.css";

//page (à créer)
// import LandingPage from "./pages/landingPage/LandingPage";
// import EpoquePage from "./pages/EpoquePage";

function App() {
  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
