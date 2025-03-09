import { useState } from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  // DashboardLayout component to wrap the nested routes
  const DashboardLayout = () => {
    return (
      <div className="app">
        <Sidebar isSidebar={isSidebar} />
        <main className="content">
          <Topbar setIsSidebar={setIsSidebar} />
          <Outlet /> {/* This is where nested routes will be rendered */}
        </main>
      </div>
    );
  };

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          {/* Redirect from "/" to "/dashboard/home" */}
          <Route path="/" element={<Navigate to="/dashboard/home" replace />} />

          {/* Nested routes under "/dashboard" */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route path="home" element={<Dashboard />} />
            <Route path="team" element={<Team />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="invoices" element={<Invoices />} />
            <Route path="form" element={<Form />} />
            <Route path="bar" element={<Bar />} />
            <Route path="pie" element={<Pie />} />
            <Route path="line" element={<Line />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="geography" element={<Geography />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
