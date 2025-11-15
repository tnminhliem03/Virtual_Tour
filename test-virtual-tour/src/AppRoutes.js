import React from "react";
import { Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import OverviewPage from "./pages/OverviewPage/OverviewPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/overview" element={<OverviewPage />} />
    </Routes>
  );
}

export default AppRoutes;
