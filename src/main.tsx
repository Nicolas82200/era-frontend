import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Era from "./pages/era/Era";
import Form from "./components/Formulaire/Formulaire";
import LandingPage from "./pages/landingpage/LandingPage";
import Accordion from "./components/accordion/Accordion";

// page components
// import EpoquePage from "./pages/EpoquePage";

// router creation
const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: "/",
				element: <LandingPage />,
			},
			{
				path: "/era/",
				element: <Era />,
			},
			{
				path: "/Accordion",
				element: <Accordion />,
			},
			{
				path: "/form",
				element: <Form />,
			},
		],
	},
]);

// rendering
const rootElement = document.getElementById("root");

if (rootElement) {
	ReactDOM.createRoot(rootElement).render(
		<StrictMode>
			<RouterProvider router={router} />
		</StrictMode>,
	);
}
