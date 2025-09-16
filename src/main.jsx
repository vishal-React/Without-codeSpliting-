import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import More from "./More.jsx";
import Home from "./Home.jsx";
import NavigateButton from "./NavigateButton.js";

const Applayout = () => {
  return (
    <>
      <h1>Without CodeSpliting</h1>
      <Outlet />
      <br />
      <NavigateButton />
    </>
  );
};

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/more",
        element: <More />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routers} />
  </StrictMode>
);
