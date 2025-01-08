import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Layout from "./components/Layout";
import * as Pages from "./pages";
import * as Context from "./contexts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Pages.Accueil /> },
      { path: "/create", element: <Pages.Create /> },
      { path: "/update", element: <Pages.Update /> },
      { path: "/details", element: <Pages.Details /> },
      { path: "*", element: <Pages.Accueil /> },
    ],
  },
]);

export default function App() {
  return (
    <Context.BarsContextProvider>
      <RouterProvider router={router} />
    </Context.BarsContextProvider>
  );
}
