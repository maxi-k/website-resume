import React from 'react';
import { SocialLinks } from 'components/SocialLinks'
import { Link } from 'components/Link'
import { SkillLevels } from 'components/SkillLevel'
import { Publication } from 'components/Publication'
import common from './common';

const content = (
    { lang: "en",
      title : "Resume",
      person: {
          occupation: "Developer, PhD Student"
      },
      github: {
          languages: 'Languages (Github)'
      },
      resumeSections: [{
        id: "Introduction",
        header: <SkillLevels />,
        content: <p className="Biography">
                   I am a PhD student at the Friedrich–Alexander University Erlangen–Nürnberg,{' '}
                   researching databases at the chair for data management under Viktor Leis.{' '}
                   Before that, I was student at TU Munich, LMU Munich, and the University of Augsburg,{' '}
                   completing my bachelors degree in computer science and engineering, and my masters degree in software engineering.{' '}
                   I'm interested in high-performance software, distributed systems, and programming languages.
                 </p>
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
          name: "Education",
          items: [
              { name: "01/2021 - now",
                meta: "PhD Student" ,
                description: <p>
                I'm doing my PhD with Prof. <Link extern href={common.publication.phdAdvisor}>Viktor Leis</Link> at
                the Friedrich-Alexander University Erlangen-Nürnberg.
                At the moment I am researching analytical database systems and efficient query processing.
                </p>
              },
              { name: "10/2018 - 11/2020",
                meta: "Master of Science, Multiple Universities. Final Grade 1.02 (GPA 3.9~4.0)" ,
                description: <p>
                I was part of the <Link extern href="https://elite-se.informatik.uni-augsburg.de/">
                Software Engineering Elite Graduate Program
                </Link>, and received my masters degree in software engineering in 2020.
                As part of the program, I was a student at the University of Augsburg,
                the Technical University of Munich, as well as the Ludwig-Maximilian University in Munich.
                </p>
              },
              { name: "09/2015 - 09/2018",
                meta: "Bachelor of Science, University of Augsburg. Final Grade 1.56 (GPA 3.6~3.8)",
                description: <p>
                Until 2018, I was a student at the University of Augsburg, studying{' '}
                <Link extern href="https://www.informatik.uni-augsburg.de/studium/studiengaenge/bachelor_inginf.html"
               >Computer Science and Engineering</Link>.
                </p>
              }
          ]
      }, {
          id: "Working-Experience",
          name: "Working Experience",
          items: [
              { name: "04/2021 - now",
                meta: "University Erlangen",
                id: "cv-research-erlangen",
                description: <p>
                I am employed at the{' '}
                <Link extern href="https://www.cs6.tf.fau.eu/">chair for data management</Link>{' '}
                at the Friedrich-Alexander University Erlangen-Nürnberg as research advisor,{' '}
                where I supervise various courses, student projects and theses.
                </p> },
              { name: "04/2020 - 03/2021",
                meta: "University of Jena",
                id: "cv-job-jena",
                description: <p>
                I was employed at the chair for{' '}
                <Link extern href="https://dbis1.github.io/">Databases and Information Systems</Link>{' '}
                at the Friedrich-Schiller University Jena as a research assistant and later as a research advisor,{' '}
                before the chair moved to the Friedrich-Alexander University in Erlangen.
                </p> },
              { name: "08/2019 - 10/2019",
                meta: "Oracle Labs Zurich",
                id: "cv-oracle",
                description: <p>
                As a research assistant at Oracle Labs Zurich, I was able to contribute to a large
                oracle-internal software project. I designed the architecture for a completely new part
                of the system together with my mentor and implemented and integrated it afterwards
                with great success.
                </p> },
              { name: "10/2017 - 01/2020",
                meta: "Integer IT",
                id: "cv-integer",
                description: <p>
                I worked at the IT Firm <Link extern href="https://integer.de/">Integer</Link>,
                where I was responsible for developing and maintaining internal software projects.
                Furthermore, I was the go-to guy when it came to software projects for customers,
                many of which I designed and developed from start to finish.
                </p> },
              { name: "01/2016 - 10/2017",
                meta: "IT-Department, Faculty of Business and Economics, University of Augsburg",
                id: "cv-itwiwi",
                description: <p>
                Working at the <Link extern href="https://www.uni-augsburg.de/de/fakultaet/wiwi/itwiwi/">IT-Department</Link> of
                the biggest faculty on campus, my tasks included administering
                multiple Linux systems in a virtual environment,
                developing and maintaining a Ruby on Rails App, as well as maintaining
                our monitoring system for the 900+ devices in the building.
                </p> },
              { name: "08/2015 - 09/2015",
                meta: "Smartrac Technology GmbH",
                id: "cv-smartrac",
                description: <p>
                In a summer internship at <Link extern href="https://www.smartrac-group.com">
                Smartrac</Link>, I got to create a server extension for their{' '}
                <Link extern href="https://rfid.averydennison.com/en/home/products-solutions/iot/connected-product-cloud.html">Smart Cosmos</Link> IoT system using Java,
                which enabled it to send SMS in connection with IoT events using{' '}
                <Link extern href="https://www.twilio.com">Twilio</Link>.
                </p>
      }]
  }, {
    id: "Contact",
    name: "Contact",
    content: <SocialLinks />
  }]})

export default content;
