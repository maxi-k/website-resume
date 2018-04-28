import React from 'react';
import SocialLinks from 'components/SocialLinks';

const content = (
    { lang: "de",
      title : "Lebenslauf",
      person: {
          occupation: "Softwareentwickler"
      },
      resumeSections: [{
          id: "Skills",
          name: "Fähigkeiten",
          items: [
              { name: "Java",
                meta: "The Workhorse",
                description: <p>
                Seitdem ich als Jugendlicher durch das Erstellen und Veröffentlichen
                mehrerer Minecraft Mods in Java eingestiegen bin, habe ich bei
                während meines <a href="#cv-smartrac">Praktikums</a> bei
                {' '}<a href="https://www.smartrac-group.com" target="_new">Smartrac</a>{' '}
                2015 einiges an Erfahrung zum Thema Java-Entwicklung gesammelt.
                </p> },
              { name: "Clojure",
                meta: "The Awesome Tech",
                description: <p>
                Nach meinem initialen Kontakt mit der Sprache beim Schreiben
                einer Seminararbeit über 4D-Rotation im Gymnasium, entschied ich mich
                kurzerhand die
                {' '}<a href="https://github.com/maxi-k/drawer" target="_new">dazugehörige Software</a>{' '}
                in <a href="https://reagent-project.github.io" target="_new">ClojureScript + React</a>{' '}
                zu schreiben. Seitdem habe ich die Sprache(n) für viele weitere Projekte verwendet
                und weiß sie sehr zu schätzen.
                </p> },
              { name: "Web",
                meta: "Unlimited Possibilities",
                description: <p>
                Neben den Grundlagen (HTML, CSS, Sass, JS, ES6),
                den Frameworks (Bootstrap, Materialize, Semantic-UI) und dem
                nötigen Übel (PHP), arbeite ich heutzutage hauptsächlich mit
                {' '}<a href="https://facebook.github.io/react/" target="_new">React</a>{' '} &ndash;
                neben einigen anderen Projekten
                <a href="https://github.com/maxi-k/website-resume" target="_new" title="Ich weiß, Overkill">
                diese Webseite</a> ist zum Beispiel darin geschrieben.
                </p> },
              { name: "Ruby",
                meta: "Did someone say Rails?",
                description: <p>
                Bei <a href="#cv-itwiwi">meinem Job</a> an der Wirtschaftswissenschaftlichen Fakultät
                der Universität Augsburg habe über knapp 2 Jahre hinweg
                eine Rails Applikation entwickelt und gepflegt.
                </p> } /*,
               { name: "Elixir",
                meta: "Everything old is new again",
                description: <p>
                I only got into <a href="https://elixir-lang.org" target="_new">Elixir</a> recently,
                and I am really enjoying it and the possibilities it opens up.
                I have been working with the <a href="http://phoenixframework.org" target="_new">
                Phoenix Framework</a> for the most part.
                </p> } */
          ]
      }, {
          id: "Education",
          name: "Ausbildung",
          items: [
              { name: "08/2015 - 08/2018",
                meta: "Bachelor of Science, Universität Augsburg",
                description: <p>
                Ich bin Student an der Universität Augsburg und studiere{' '}
                <a href="https://www.informatik.uni-augsburg.de/studium/studiengaenge/bachelor_inginf.html"
                target="_new">Ingenieurinformatik</a> im Bachelor, mit voraussichtlichem
                Abschluss im Sommer 2018.
                </p>
              },
              { name: "09/2007 - 6/2015",
                meta: "Abitur, Note 1.2 (A)",
                description: <p>
                Ich besuchte das <a href="https://www.jakob-brucker-gymnasium.de" target="_new">
                Jakob-Brucker-Gymnasium</a> in Kaufbeuren (Bayern) mit dem
                humanistischen Vertiefungsbereich (Latein und Altgriechisch).
                </p>
              }
          ]
      }, {
          id: "Working-Experience",
          name: "Arbeitserfahrung",
          items: [
              { name: "10/2017 - heute",
                meta: "Integer GmbH",
                id: "cv-integer",
                description: <p>
                Im Moment arbeite ich bei einem kleinen IT Dienstleister. Hier entwickle und pflege ich
                interne Softwareprojekte, und bin die erste Anlaufstelle für Softwareprojekte- und Aufträge
                von Kunden.
                </p> },
              { name: "01/2016 - 10/2017",
                meta: "IT-Abteilung der Wirtschaftswissenschaftlichen Fakultät, Universität Augsburg",
                id: "cv-itwiwi",
                description: <p>
                Meine Aufgaben in der <a href="http://www.wiwi.uni-augsburg.de/it/" target="_new">IT-Abteilung</a> der
                größten Fakultät auf dem Campus waren unteranderem die Administration mehrerer
                Linux-Systeme in einer virtuellen Umgebung, die Entwicklung und Pflege eine Ruby-on-Rails Applikation,
                so wie die Pflege des Monitoring-Systems für die 900+ Geräte im Gebäude.
                </p> },
              { name: "08/2015 - 09/2015",
                meta: "Smartrac Technology GmbH",
                id: "cv-smartrac",
                description: <p>
                In einem Praktikum über den Sommer bei <a href="https://www.smartrac-group.com" target="_new">
                Smartrac</a> konnte ich eine Server-Erweiterung für deren{' '}
                <a href="https://www.smart-cosmos.com">Smart Cosmos</a> IoT-System mit Java entwickeln,
                welches es ermöglichte SMS in Verbindung mit IoT Events mittels{' '}
                <a href="https://www.twilio.com" target="_new">Twilio</a> zu verschicken.
                </p>
              }]
      }, {
          id: "Certificates",
          name: "Zertifikate",
          items: [
              { name: "Fortgeschrittenes Englisch",
                meta: "Sprachlevel C2",
                description: <p>
                Ich erwarb das Cambridge Advanced English Certificate (CEA) 2015,{' '}
                und erreichte die Note A, was dem vom Europäischen Rat
                festgelegten Sprachlevel C2 entspricht.
                </p>
              }]
      }, {
          id: "Contact",
          name: "Kontakt",
          content: <SocialLinks />
      }]})

export default content;
