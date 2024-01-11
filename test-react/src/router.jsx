import App from "./App";
import Feed from "./components/feed";
import Profile from "./components/profile.jsx";
import About from "./components/about.jsx";
import Login from "./components/login/login.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Router = () => {
  const router = createBrowserRouter([
    { path: "/", element: <App /> },
    { path: "/about", element: <About /> },
    { path: "/feed", element: <Feed />},
    { path: "/profile", element: <Profile /> }
]);
    return <RouterProvider router={router} /> 
};
export default Router