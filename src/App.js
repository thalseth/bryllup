import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Container from "./components/Container";
import Page from "./components/Page";
import DateInfoCard from "./components/DateInfoCard";

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
              description: "Dagen før dagen",
              info: "Enkel servering | Smart casual"
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
          <h2>Gaveønsker</h2>
          <p>
            Vi ønsker oss mange gode klemmer, men for de som ønsker å gi noe
            annet i tillegg kan dere sjekke ut gaveønsker under:
          </p>
          <ul>
            <li>
              <a
                href="https://www.illumsbolighus.no/giftlist?giftlist=4e14dbf6"
                target="_blank"
                rel="noopener noreferrer"
              >
                Gaveliste hos Illums Bolighus
              </a>
            </li>
            <li>
              <a
                href="https://www.designforevig.no/bryllupslister/59776"
                target="_blank"
                rel="noopener noreferrer"
              >
                Gaveliste hos Designforevig
              </a>
            </li>
            <li>
              <a
                href="https://arven.no/solvbestikk/filter?landingImageID=3253&page_193=1&perpage_193=20#{%22M%C3%B8nster%22:[%22Rosendal"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rosendal sølvbestikk fra Arven
              </a>
            </li>
          </ul>
        </section>
        <section>
          <h2>Bekledning</h2>
          <p>
            <a
              href="https://goo.gl/cmXfoi"
              target="_blank"
              rel="noopener noreferrer"
            >
              Smoking / Mørk dress
            </a>
          </p>
        </section>
        <section>
          <h2>Matallergi</h2>
          <p>
            Har du matallergi? Send oss en melding så gir vi beskjed til kokken.
          </p>
        </section>
        <section>
          <h2>Tak over hode</h2>
          <p>
            Det finnes flere alternativ i nærheten, her har dere en{" "}
            <a
              href="https://www.google.no/maps/search/Hotell+bergen/@60.3961769,5.3152299,15z/data=!4m5!2m4!5m3!5m2!1s2018-05-25!2i2?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              hotelloversikt
            </a>.
          </p>
          <p>
            Thon Hotel Orion er ett alternativ som ligger rett ved
            Snekkerbrakken. Vi har reservert 20 superior rom til kr 1625.-
            enkelt, og kr 1925.- for dobbelt per natt. Referansenummer{" "}
            <b>2547851</b> oppgis ved bestilling.
            <a
              href="tel:+4755308763"
              value="+4755308763"
              target="_blank"
              rel="noopener noreferrer"
            >
              +47 55 30 87 63
            </a>
          </p>
          <p>
            Husk å bestille i god tid, helst i går. Festspillene i Bergen
            arrangeres samme helg og det kan fort bli kamp om de siste suitene!
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
    </Container>
  </Router>
);
