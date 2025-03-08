// AppRoutes.jsx
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../scenes/dashboard/index";
import Team from "../scenes/team/index";
import Contacts from "../scenes/contacts/index";
import Form from "../scenes/form/index";
import Bar from "../scenes/bar/index";
import Pie from "../scenes/pie/index";
import Line from "../scenes/line/index";
import FAQ from "../scenes/faq/index";
import Calendar from "../scenes/calendar/calendar";
import Geography from "../scenes/geography/index";
import { useMemo } from "react";
// import NotFoundPage from "../components/NotFoundPage";

const AppRoutes = () => {
  const routes = useMemo(
    () => [
      {
        path: "/",
        element: <Dashboard />, // Default route
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "/form",
        element: <Form />,
      },
      {
        path: "/bar",
        element: <Bar />,
      },
      {
        path: "/pie",
        element: <Pie />,
      },
      {
        path: "/line",
        element: <Line />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/calendar",
        element: <Calendar />,
      },
      {
        path: "/geography",
        element: <Geography />,
      },
      // {
      //   path: "*", // 404 route
      //   element: <NotFoundPage />,
      // },
    ],
    []
  );

  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
