import React from 'react';
import SocialLinks from 'components/SocialLinks';
import Link from 'components/Link'

const content = (
    { lang: "de",
      title : "Lebenslauf",
      person: {
          occupation: "Student, Softwareentwickler"
      },
      resumeSections: [{
          id: "Education",
          name: "Ausbildung",
          items: [
              { name: "10/2018 - 2020",
                meta: "Master of Science, Mehrere Universitäten" ,
                description: <p>
                Ich bin Teil des <Link extern href="https://elite-se.informatik.uni-augsburg.de/">
                Software Engineering Elite Graduate Program
                </Link>, mit voraussichtlichem Abschluss im Sommer 2020.
                Als Teil des Studiengangs bin ich Student an der Universität Augsburg,
                der Technischen Universität München,
                sowie an der Ludiwg-Maximilians Universität München.
                </p>
              },
              { name: "09/2015 - 09/2018",
                meta: "Bachelor of Science, Universität Augsburg. Abschlussnote 1,56",
                description: <p>
                Bis 2018 studierte ich an der Universität Augsburg <Link extern href="https://www.informatik.uni-augsburg.de/studium/studiengaenge/bachelor_inginf.html"> Ingenieurinformatik</Link> im Bachelor.
                </p>
              },
              { name: "09/2007 - 6/2015",
                meta: "Abitur, Note 1.2 (A)",
                description: <p>
                Ich besuchte das <Link extern href="https://www.jakob-brucker-gymnasium.de">
                Jakob-Brucker-Gymnasium</Link> in Kaufbeuren (Bayern) mit dem
                humanistischen Vertiefungsbereich (Latein und Altgriechisch).
                </p>
              }
          ]
      }, {
          id: "Working-Experience",
          name: "Arbeitserfahrung",
          items: [

              { name: "04/2020 - 10/2020",
                meta: "Universität Jena",
                id: "cv-job-jena",
                description: <p>
                Ich bin am Lehrstuhl{' '}
                <Link extern href="https://dbis1.github.io/">Datenbanken und Informationssysteme</Link>{' '}
                an der Universität Jena eingestellt, während ich dort meine Mastarbeit schreibe, welche von{' '}
                <Link extern href="https://dbis1.github.io/team/leis.html">Prof. Dr. Viktor Leis</Link>{' '}
                betreut wird.
                </p> },
              { name: "08/2019 - 10/2019",
                meta: "Oracle Labs Zürich",
                id: "cv-oracle",
                description: <p>
                Als Research Assistant bei Oracle Labs in Zürich konnte ich bei einem großen internen
                Softwareprojekt mitwirken. Ich habe für einen neuen Systemteil zusammen mit meinem Mentor
                die Architektur erstellt und im Anschluss mit vollem Erfolg implementiert und integriert.
                </p> },
              { name: "10/2017 - 01/2020",
                meta: "Integer GmbH",
                id: "cv-integer",
                description: <p>
                Bei dem IT Dienstleister <Link extern href="https://integer.de/">Integer</Link> nahe Augsburg
                entwicklte und pflegte ich interne Softwareprojekte. Zudem war ich die erste Anlaufstelle für
                Softwareprojekte- und Aufträge von Kunden, von denen ich viele von Anfang bis Ende
                mitdesignte und entwickelte.
                </p> },
              { name: "01/2016 - 10/2017",
                meta: "IT-Abteilung der Wirtschaftswissenschaftlichen Fakultät, Universität Augsburg",
                id: "cv-itwiwi",
                description: <p>
                Meine Aufgaben in der <Link extern href="http://www.wiwi.uni-augsburg.de/it/">IT-Abteilung</Link> der
                größten Fakultät auf dem Campus waren unteranderem die Administration mehrerer
                Linux-Systeme in einer virtuellen Umgebung, die Entwicklung und Pflege eine Ruby-on-Rails Applikation,
                so wie die Pflege des Monitoring-Systems für die 900+ Geräte im Gebäude.
                </p> },
              { name: "08/2015 - 09/2015",
                meta: "Smartrac Technology GmbH",
                id: "cv-smartrac",
                description: <p>
                In einem Praktikum über den Sommer bei <Link extern href="https://www.smartrac-group.com">
                Smartrac</Link> konnte ich eine Server-Erweiterung für deren{' '}
                <Link extern href="https://www.smartrac-group.com/IoT-solutions.html">Smart Cosmos</Link>{' '}
                IoT-System mit Java entwickeln, welches es ermöglichte SMS in Verbindung mit IoT Events mittels{' '}
                <Link extern href="https://www.twilio.com">Twilio</Link> zu verschicken.
                </p>
              }]
      }, {
          id: "Programming",
          name: "Programming",
          items: [
            { name: "Java & Scala",
              meta: "Sounds professional",
              description: <p>
              Ich habe Java und Scala sowohl in einigen privaten und universitären Projekten verwendet,
              also auch während meiner Praktika bei <Link href="cv-oracle">Oracle</Link> und <Link href="#cv-smartrac">Smartrac</Link>.
              Der Großteil meiner <Link extern href="https://github.com/maxi-k/bachelor-code">Bachelorarbeit</Link> ist in
              Java und <Link extern href="https://projectreactor.io/">Reactive Streams</Link> implementiert.
              </p> },
            { name: "Clojure",
              meta: "λ x y . x",
              description: <p>
              Initial lernte ich Clojure(Script) beim Implementieren
              einer <Link extern href="https://github.com/maxi-k/drawer">Webseite über 4D-Rotation</Link> für
              ein Paper in der Schule kennen.
              Mein jüngstes Lisp-Projekt war
              das <Link extern href="https://en.wikipedia.org/wiki/Beer_distribution_game">Beer Distribution Game</Link> in
              full-stack Clojure und ClojureScript unter Verwendung von Websockets.
              </p> },
            { name: "C++",
              meta: "Efficiency²",
              description: <p>
              Im Rahmen von Vorlesungen und Seminaren habe ich verschiedene Teile von Datenbanken in C++ implementiert.
              Auch während meiner Masterarbeit kam die Sprache vielseitig zum Einsatz.
              </p> },
            { name: "JavaScript",
              meta: "hype.js",
              description: <p>
              Ich habe mehr Frontends und Backends mit mehr Frameworks und Bibliotheken implementiert als ich mich erinnern kann,
              reichend von Node und Angular bis hin zu React-Native mit TypeScript.
              </p>
            }
          ]
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
