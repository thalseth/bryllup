import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Container from "./components/Container";
import Page from "./components/Page";
import DateInfoCard from "./components/DateInfoCard";
import { injectGlobal } from "styled-components";
import color from "./color";

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: "Roboto Mono", monospace;
    font-size: 1rem;
    color: #444;
    line-height: 1.5;
  }

  #root,
  body,
  html {
    height: 100vh;
    background-color: ${color.background};
  }

  * {
    box-sizing: border-box;
  }

  p {
    margin: 0 0 0.75em;
  }

  a {
    color: black;
  }

  a:visited {
    color: black;
  }

  a:hover {
    background-color: black;
    color: white;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.2;
    font-weight: 400;
    margin: 0 0 0.5em;
  }

`;

export default () => (
  <Router>
    <Container>
      <Page heading="Mathilde & Torleif">
        <DateInfoCard
          date="2018-05-25"
          events={[
            {
              time: "19:00",
              location: "Persenbakken 32",
              description: "Den nye hagen!",
              info: "Grillings | Smart casual",
              link:
                "https://www.google.com/maps/place/Persenbakken+32,+5034+Bergen/@60.4029843,5.3186585,15.25z/data=!4m13!1m7!3m6!1s0x463cfea1afdab54f:0x8271f37dd4d231ff!2sPersenbakken+32,+5034+Bergen!3b1!8m2!3d60.4036866!4d5.3306091!3m4!1s0x463cfea1afdab54f:0x8271f37dd4d231ff!8m2!3d60.4036866!4d5.3306091"
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
          <h2>Ønsker</h2>
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
          <h2>Mat</h2>
          <p>
            Har du matallergi? Er du veganer, gravid eller bare kresen? Send oss
            en melding så gir vi beskjed til kokken.
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
            Snekkerbrakken. Vi har reservert 20 superiorrom til kr 1625.-
            enkelt, og kr 1925.- for dobbelt per natt. Referansenummer{" "}
            <b>2547851</b> oppgis ved bestilling på tlf{" "}
            <a
              href="tel:+4755308763"
              value="+4755308763"
              target="_blank"
              rel="noopener noreferrer"
            >
              +47 55 30 87 63
            </a>.
          </p>
          <p>
            Husk å sjekke{" "}
            <a
              href="https://www.google.no/maps/search/Hotell+bergen/@60.3961769,5.3152299,15z/data=!4m5!2m4!5m3!5m2!1s2018-05-25!2i2?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              hotelloversikt
            </a>{" "}
            for bedre tilbud.
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
            Talere / Musikere / Standupere møter til audition... neida... det
            holder å melde fra til Hanna Viola.
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
