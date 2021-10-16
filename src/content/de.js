import React from 'react';
import { Link } from 'components/Link'
import { SkillLevels } from 'components/SkillLevel'
import { SocialLinks } from 'components/SocialLinks'
import { Publication } from 'components/Publication'
import common from './common';

const content = (
    { lang: "de",
      title : "Lebenslauf",
      person: {
          occupation: "Softwareentwickler, Doktorand"
      },
      resumeSections: [{
          id: "Languages",
          content: <SkillLevels />
      }, {
          id: "Publications",
          name: "Publications",
          items: common.publications.map((pub) => ({
            name: pub.conference + " " + pub.year,
            meta: pub.type,
            description: <Publication {...pub} />
          }))
      }, {
          id: "Education",
          name: "Ausbildung",
          items: [
              { name: "01/2021 - jetzt",
                meta: "Doktorand" ,
                description: <p>
                Ich bin Doktorand unter der Leitung von Prof. Viktor Leis an der Friedrich-Alexander Universität Erlangen-Nürnberg.
                Zur Zeit forsche ich an analytischen Datenbanksystemen und effizienter Anfragebearbeitung.
                </p>
              },
              { name: "10/2018 - 11/2020",
                meta: "Master of Science, Mehrere Universitäten. Abschlussnote 1,02" ,
                description: <p>
                Ich war Teil des <Link extern href="https://elite-se.informatik.uni-augsburg.de/">
                Software Engineering Elite Graduate Program
                </Link>, und erhielt meinen Abschluss im Dezember 2020.
                Als Teil des Studiengangs war ich Student an der Universität Augsburg,
                der Technischen Universität München,
                sowie an der Ludiwg-Maximilian Universität München.
                </p>
              },
              { name: "09/2015 - 09/2018",
                meta: "Bachelor of Science, Universität Augsburg. Abschlussnote 1,56",
                description: <p>
                Bis 2018 studierte ich an der Universität Augsburg <Link extern href="https://www.informatik.uni-augsburg.de/studium/studiengaenge/bachelor_inginf.html"> Ingenieurinformatik</Link> im Bachelor.
                </p>
              }
          ]
      }, {
          id: "Working-Experience",
          name: "Arbeitserfahrung",
          items: [
              { name: "04/2021 - jetzt",
                meta: "Universität Erlangen",
                id: "cv-research-erlangen",
                description: <p>
                Ich bin am{' '}
                <Link extern href="https://www.cs6.tf.fau.de/">Lehrstuhl für Datenmanagement</Link>{' '}
                an der Friedrich-Alexander-Universität Erlangen als wissenschaftlicher Mitarbeiter eingestellt,{' '}
                wo ich Forsche und verschiedene Kurse, studentische Projekte und Abschlussarbeiten betreue.
                </p> },
              { name: "04/2020 - 03/2021",
                meta: "Universität Jena",
                id: "cv-job-jena",
                description: <p>
                Ich war am Lehrstuhl für{' '}
                <Link extern href="https://dbis1.github.io/">Datenbanken und Informationssysteme</Link>{' '}
                an der Universität Jena als wissenschaftliche Hilfskraft und später als wissenschaftlicher Mitarbeiter eingestellt,{' '}
                bevor dieser an die Friedrich-Alexander-Universität Erlangen-Nürnberg umzog.
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
                Meine Aufgaben in der <Link extern href="https://www.uni-augsburg.de/de/fakultaet/wiwi/itwiwi/">IT-Abteilung</Link> der
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
                <Link extern href="https://rfid.averydennison.com/en/home/products-solutions/iot/connected-product-cloud.html">Smart Cosmos</Link>{' '}
                IoT-System mit Java entwickeln, welches es ermöglichte SMS in Verbindung mit IoT Events mittels{' '}
                <Link extern href="https://www.twilio.com">Twilio</Link> zu verschicken.
                </p>
              }]
      }, {
          id: "Contact",
          name: "Kontakt",
          content: <SocialLinks />
      }]})

export default content;
