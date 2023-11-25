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
          occupation: "Doktorand an der TU München"
      },
      skills: {
        others: 'Andere'
      },
      publication: {
        availableSoon: "bald verfügbar"
      },
      resumeSections: [{
        id: "SkillLevels",
        header: <span className="github-url">{common.person.githubUrl.replace("https://", '')}</span>,
        content: <SkillLevels />
      }, {
        id: "Introduction",
        content: <p>
                     Ich bin Doktorand an der TU München{' '}
                     und forsche am Lehrstuhl für Decentralized Information Systems and Data Management unter Viktor Leis an Datenbanken.{' '}
                     Davor war ich Student an der TU München, der LMU München und der Universität Augsburg,{' '}
                     wo ich meinen Bachelor in Ingenieurinformatik und meinen Master in Software Engineering absolvierte.{' '}
                     Ich bin interessiert an high-performance Software, verteilten Systemen und Programmiersprachen.
                   </p>
      }, {
          id: "Publications",
          name: "Publikationen",
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
                Ich bin Doktorand an der Technischen Universität München unter der Leitung von Prof. Viktor Leis.
                Zur Zeit forsche ich an analytischen Datenbanksystemen und effizienter Anfragebearbeitung.
                </p>
              },
              { name: "10/2018 - 11/2020",
                meta: "Master of Science, Mehrere Universitäten. Abschlussnote 1,02" ,
                description: <p>
                Ich war Teil des <Link extern href="https://elite-se.informatik.uni-augsburg.de/">
                Software Engineering Elite Graduate Program
                </Link> und erhielt meinen Abschluss im Dezember 2020.
                In dieser Zeit war ich Student an der Universität Augsburg,
                der Technischen Universität München und an der Ludiwg-Maximilian Universität München.
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
              { name: "10/2022 - jetzt",
                meta: "TU München",
                id: "cv-research-tum",
                description: <p>
                Ich arbeite am Lehrstuhl für <Link extern href="https://www.cs.cit.tum.de/dis/home/">Decentralized Information Systems and Data Management</Link>{' '}
                der Technischen Universität München als wissenschaftlicher Mitarbeiter,{' '}
                wo ich an Cloud Datenbanken forsche und verschiedene Kurse, studentische Projekte und Abschlussarbeiten betreue.
                </p> },
              { name: "04/2021 - 09/2022",
                meta: "Universität Erlangen",
                id: "cv-research-erlangen",
                description: <p>
                Ich war am <Link extern href="https://www.cs6.tf.fau.de/">Lehrstuhl für Datenmanagement</Link>{' '}
                der Friedrich-Alexander-Universität Erlangen-Nürnberg als wissenschaftlicher Mitarbeiter angestellt,{' '}
                bis ich zusammen mit Prof. Leis an die TU München zog.
                </p> },
              { name: "04/2020 - 03/2021",
                meta: "Universität Jena",
                id: "cv-job-jena",
                description: <p>
                Ich war am Lehrstuhl für{' '}
                <Link extern href="https://dbis1.github.io/">Datenbanken und Informationssysteme</Link>{' '}
                an der Universität Jena als wissenschaftliche Hilfskraft und später als wissenschaftlicher Mitarbeiter eingestellt.
                Später zog ich zusammen mit dem Lehrstuhl nach Erlangen.
                </p> },
              { name: "08/2019 - 10/2019",
                meta: "Oracle Labs Zürich",
                id: "cv-oracle",
                description: <p>
                Als Research Assistant bei Oracle Labs in Zürich arbeitete ich an einem großen internen
                Softwareprojekt. Ich erstellte zusammen mit meinem Mentor die Architektur für einen neuen
                Systemteil und im implementierte ihn im Anschluss mit großem Erfolg.
                </p> },
              { name: "10/2017 - 01/2020",
                meta: "Integer GmbH",
                id: "cv-integer",
                description: <p>
                Bei dem IT Dienstleister <Link extern href="https://integer.de/">Integer</Link> entwicklte
                und pflegte ich interne Softwareprojekte und entwarf und implementierte einige Softwareprojekte für Kunden.
                </p> },
              { name: "01/2016 - 10/2017",
                meta: "IT-Abteilung, Universität Augsburg",
                id: "cv-itwiwi",
                description: <p>
                Bei der <Link extern href="https://www.uni-augsburg.de/de/fakultaet/wiwi/itwiwi/">IT-Abteilung</Link> der
                größten Fakultät administrierte ich mehrere Linux VMs und entwickelte und pflegte eine Ruby-on-Rails App,
                die für den Großteil der internen Datenverwaltung verwendet wurde.
                </p> },
              { name: "08/2015 - 09/2015",
                meta: "Smartrac Technology GmbH",
                id: "cv-smartrac",
                description: <p>
                Während eines Praktikums bei <Link extern href="https://www.smartrac-group.com">
                Smartrac</Link> entwickelte ich eine Erweiterung für deren{' '}
                <Link extern href="https://rfid.averydennison.com/en/home/products-solutions/iot/connected-product-cloud.html">Smart Cosmos</Link>{' '}
                IoT-System, welches es ermöglichte SMS in Verbindung mit IoT Events mittels{' '}
                <Link extern href="https://www.twilio.com">Twilio</Link> zu verschicken.
                </p>
              }]
      }, {
          id: "Contact",
          name: "Kontakt",
          content: <SocialLinks />
      }]})

export default content;
