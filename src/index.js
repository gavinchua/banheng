import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import ReactRouter from "./router/Router";

// All CSS should be imported
import "bootstrap/dist/css/bootstrap.css";
import "./css/App.css";

const App = () => (
  <Router>
    <ReactRouter />
  </Router>
);

render(<App />, document.getElementById("root"));
