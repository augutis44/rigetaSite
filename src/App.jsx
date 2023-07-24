import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import About from "./pages/About";
import Services from "./pages/Services";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/contacts",
      element: <Contacts />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/services",
      element: <Services />
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );

}

export default App;
