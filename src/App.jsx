
import React from "react";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/contacts",
      element: <Contacts />,
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );

}

export default App;
