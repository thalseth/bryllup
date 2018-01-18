import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Container from "./components/Container";
import Routes from "./Routes";

export default () => (
  <Router>
    <Container>
      <Routes />
    </Container>
  </Router>
);
