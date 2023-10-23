import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Home from "../components/Home";
import Results from "../components/Results";
import About from "../components/About";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "results",
        element: <Results />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

export default routes;
