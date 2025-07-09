import { createBrowserRouter } from "react-router-dom";
import Home from "./components/pages/Home";
import Tasks from "./components/pages/Tasks";
import Layout from "./Layout";
import PageNotFound from "./components/pages/PageNotFound";
import Projects from "./components/pages/Projects";
import Reports from "./components/pages/Reports";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/tasks",
        element: <Tasks />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/reports",
        element: <Reports />,
      },
      {
        path: "*",
        element: <PageNotFound />
      }
    ],
  },
]);
