import App from "./App";
import Feed from "./components/feed";
import Profile from "./components/profile.jsx";
import About from "./components/about.jsx";
import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Router = () => {
  const [isLogged, setIsLogged] = useState(false);

  const router = createBrowserRouter([
    { path: "/", element: <App setIsLogged={setIsLogged} isLogged={isLogged} /> },
    { path: "/about", element: <About /> },
    { path: "/feed", element: <Feed />},
    { path: "/profile", element: <Profile isLogged={isLogged} /> }
]);
    return <RouterProvider router={router} /> 
};
export default Router