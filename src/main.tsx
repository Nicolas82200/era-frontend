import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import App from "./App";
// page components
// import LandingPage from "./pages/landingpage";
// import EpoquePage from "./pages/EpoquePage";

// router creation
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // {
      //   path: "/",
      //   element: <LandingPage />,
      // },
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
