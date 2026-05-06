import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import LandingPage from "./pages/landingpage/LandingPage";

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
			// {
			//   path: "/apoquePage",
			//   element: <EpoquePage />,
			// },
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
