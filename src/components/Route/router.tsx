import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Home from "../Home";
import Login from "../Login";
import PageNotFound from "../PageNotFound";
import SignUp from "../SignUp";
import Welcome from "../Welcome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // loader: rootLoader
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "welcome",
    element: <Welcome />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default router;
