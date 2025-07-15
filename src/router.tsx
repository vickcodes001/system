import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import Layout from "./Layout";
import PageNotFound from "./pages/PageNotFound";
import Projects from "./pages/Projects";
import Reports from "./pages/Reports";
import Employees from "./pages/Employees";

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
        path: "/employees",
        element: <Employees />
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);
