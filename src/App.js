import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles.css";
import { ThemeProvider } from "@emotion/react";

import Todolist from "./pages/TodolistClass";
import About from "./pages/About";

const theme = {
  color: {
    primary: {
      black: "#484848",
      red: "#c06262"
    }
  },
  background: {
    color: {
      primary: "#f2eecb"
    }
  }
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/" component={Todolist} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
