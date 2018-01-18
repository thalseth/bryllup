import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Container from "./components/Container";
import Page from "./components/Page";
import Routes from "./Routes";

export default () => (
  <Router>
    <Container>
      <Page heading="Mathilde & Torleif">
        <p>
          Wow! Du er en av de første som besøker siden vår. Som du ser er det
          ganske tomt men det kommer forhåpentligvis mer allerede løpet av
          helgen.
        </p>
        <p>Noe av det som kommer:</p>
        <ul>
          <li>
            Forslag til ulike hotell. Tips: Flere har booket på Thon Hotel
            Orion.
          </li>
          <li>Kart</li>
          <li>Gaveliste</li>
          <li>Informasjon om dagen før dagen</li>
          <li>
            Savner du noe? Send en melding til{" "}
            <a href="sms:97439349">974 39 349</a>
          </li>
        </ul>
      </Page>
      {/* <Routes /> */}
    </Container>
  </Router>
);
