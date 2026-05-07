import { Outlet } from "react-router-dom";
import { EraProvider } from "./contextTest/ContextTest";
import NavBar from "./components/NavBar/NavBar";
import Timeline from "./components/Timeline/Timeline";
import "./App.css";
import "./index.css";

function App() {
  return (
    <EraProvider>
      <NavBar />
      <Outlet />
      <Timeline />
    </EraProvider>
  );
}

export default App;
