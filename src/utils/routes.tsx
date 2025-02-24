import { createBrowserRouter } from "react-router";
import { Aboutus, Contents, Events, Home } from "../pages";
import HomeLayout from "../providers/home.layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/events", element: <Events /> },
      { path: "/contents", element: <Contents /> },
      { path: "/about-us", element: <Aboutus /> },
    ],
  },
  // { path: "*", element: <NotFound /> },
]);
