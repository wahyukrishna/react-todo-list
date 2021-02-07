import React from "react";
import "./styles.css";
import { ThemeProvider } from "@emotion/react";

import Todolist from "./pages/Todolist";

const theme = {
  color: {
    primary: {
      black: "#484848",
      red: "#c06262"
    }
  }
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Todolist />
    </ThemeProvider>
  );
}
