import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Error from "./components/pages/Error";
// Assure-toi que le fichier existe bien

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />, // Gestion des erreurs sur cette route
  },
  {
    path: "/flat",
    element: <h1>Appartements</h1>, // Correction de l'orthographe
  },
  {
    path: "/about",
    element: <h1>À propos</h1>, // Correction du texte affiché
  },
  {
    path: "*",
    element: <Error />, // Gestion des routes inconnues
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
