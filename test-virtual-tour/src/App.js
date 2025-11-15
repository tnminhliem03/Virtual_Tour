import "./App.css";

import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <AppRoutes />
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;
