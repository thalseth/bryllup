import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Page from "./components/Page";

export default withRouter(() => (
  <Route
    render={({ location }) => (
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          timeout={600}
          classNames="page-animation"
        >
          <Switch location={location}>
            <Route
              path="/bryllup"
              exact
              render={() => (
                <Page heading="Mathilde & Torleif">
                  <p>
                    Wow! Du er en av de første som besøker siden vår. Som du ser
                    er det ganske tomt men det kommer forhåpentligvis mer
                    allerede løpet av helgen.
                  </p>
                  <p>Noe av det som kommer:</p>
                  <ul>
                    <li>
                      Forslag til ulike hotell. Tips: Flere har booket på Thon
                      Hotel Orion.
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
              )}
            />
            <Route
              path="/bryllup/about"
              exact
              render={() => <Page heading="About" />}
            />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    )}
  />
));
