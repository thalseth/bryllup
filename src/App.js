import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Container from "./components/Container";
import Page from "./components/Page";
import DateInfoCard from "./components/DateInfoCard";
import Routes from "./Routes";

export default () => (
  <Router>
    <Container>
      <Page heading="Mathilde & Torleif">
        <DateInfoCard
          date="2018-05-25"
          events={[
            {
              time: "19:00",
              location: "Hemmelig sted",
              description: "Dagen før dagen"
            }
          ]}
        />
        <DateInfoCard
          date="2018-05-26"
          events={[
            {
              time: "12:30",
              location: "Mariakirken",
              link: "https://goo.gl/maps/44WbU9ktGVx",
              description: "Vielse"
            },
            {
              time: "13:30",
              location: "Snekkerbrakken",
              link: "https://goo.gl/maps/YdCShWymT2x",
              description: "Fest"
            }
          ]}
        />
        <section>
          <h2>Tak over hode</h2>
          <p>
            Thon Hotel Orion ligger mellom Mariakirken og Snekkerbrakken og er
            et populært valg blant ungdommen.
            <a href="https://goo.gl/e5ydPJ" target="_blank">
              Booking på Thon Hotel Orion.
            </a>
          </p>
          <p>
            Husk å bestille i god tid, kanskje allerede i kveld? Det arrangeres
            Festspill samme helg og det kan fort bli kamp om de siste suitene!
          </p>
        </section>
        <section>
          <h2>Gaver og sånn</h2>
          <p>
            Vi ønsker oss mange gode klemmer, men for de som ønsker å gi noe
            annet i tillegg kommer det snart lenker til ønskelister.
          </p>
        </section>
        <section>
          <h2>Matallergi</h2>
          <p>
            Har du matallergi? Send oss en melding så gir vi beskjed til kokken.
          </p>
        </section>
        <section>
          <h2>Kontakt</h2>
          <p>
            Har du en kul idè du ønsker å dele med oss eller spørsmål må du
            skrike ut! Eventuelt send oss en melding (du kan trykke på lenkene
            på mobil)
          </p>
          <p>
            <a href="sms:‭+47 415 10 098‬" title="Send melding til Mathilde">
              Drøs med Mathilde (415 10 098)
            </a>
          </p>
          <p>
            <a href="sms:‭+47 974 39 349‬" title="Send melding til Torleif">
              Radla med Torleif (974 39 349‬)
            </a>
          </p>
          <p>
            <a
              href="mailto:hannawallerby@gmail.com?Subject=Bryllup: Mathilde og Torleif"
              title="Send e-post til Hanna Viola"
            >
              Prat med Hanna Viola [Toastmaster] - hannawallerby@gmail.com
            </a>
          </p>
        </section>
      </Page>
      {/* <Routes /> */}
    </Container>
  </Router>
);
