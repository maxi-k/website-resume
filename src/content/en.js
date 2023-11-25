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
          occupation: "Ph.D. Student at TU Munich"
      },
      github: {
          languages: 'Languages (Github)'
      },
      skills: {
        others: 'Others'
      },
      publication: {
        availableSoon: "available soon"
      },
      resumeSections: [{
        id: "SkillLevels",
        header: <span className="github-url">{common.person.githubUrl.replace("https://", '')}</span>,
        content: <SkillLevels />
      }, {
        id: "Introduction",
        content: <p>
                   I am a Ph.D. student at the Technical University Munich,{' '}
                   researching databases at the Chair for Decentralized Information Systems and Data Management under Viktor Leis.{' '}
                   Before that, I was a student at TU Munich, LMU Munich, and the University of Augsburg,{' '}
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
                meta: "Ph.D. Student" ,
                description: <p>
                I'm doing my Ph.D. with Prof. <Link extern href={common.publication.phdAdvisor}>Viktor Leis</Link> at
                the Technical University Munich.
                At the moment I am researching analytical database systems and efficient query processing.
                </p>
              },
              { name: "10/2018 - 11/2020",
                meta: "Master of Science, Multiple Universities. Final Grade 1.02 (GPA 3.9~4.0)" ,
                description: <p>
                I was part of the <Link extern href="https://elite-se.informatik.uni-augsburg.de/">
                Software Engineering Elite Graduate Program
                </Link> and received my masters degree in software engineering in 2020.
                During this time, I was a student at the University of Augsburg,
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
              { name: "10/2022 - now",
                meta: "TU Munich",
                id: "cv-research-tum",
                description: <p>
                I am employed at the{' '}
                <Link extern href="https://www.cs.cit.tum.de/dis/home/">Chair for Decentralized Information Systems and Data Management</Link>{' '}
                at the Technical University Munich as a doctoral researcher,{' '}
                where I research databases and supervise various courses, student projects, and theses.
                </p> },
              { name: "04/2021 - 09/2022",
                meta: "University Erlangen",
                id: "cv-research-erlangen",
                description: <p>
                I was employed at the{' '}
                <Link extern href="https://www.cs6.tf.fau.eu/">Chair for Data Management</Link>{' '}
                of the Friedrich-Alexander University Erlangen-Nürnberg as a research assistant.
                I then moved to TU Munich together with Prof. Leis.
                </p> },
              { name: "04/2020 - 03/2021",
                meta: "University of Jena",
                id: "cv-job-jena",
                description: <p>
                I was employed at the{' '}
                <Link extern href="https://dbis1.github.io/">Chair for Databases and Information Systems</Link>{' '}
                at the Friedrich-Schiller University Jena as a research assistant.
                I then moved to Erlangen together with the chair.
                </p> },
              { name: "08/2019 - 10/2019",
                meta: "Oracle Labs Zurich",
                id: "cv-oracle",
                description: <p>
                As a research assistant at Oracle Labs Zurich I contributed to a large
                oracle-internal software project. I designed the architecture for a new part
                of the system together with my mentor and implemented and integrated it afterwards
                with great success.
                </p> },
              { name: "10/2017 - 01/2020",
                meta: "Integer IT",
                id: "cv-integer",
                description: <p>
                At the IT Firm <Link extern href="https://integer.de/">Integer</Link> I was responsible
                for developing and maintaining internal software projects. I designed and developed
                several customer projects from start to finish.
                </p> },
              { name: "01/2016 - 10/2017",
                meta: "IT-Department, University of Augsburg",
                id: "cv-itwiwi",
                description: <p>
                Working at the <Link extern href="https://www.uni-augsburg.de/de/fakultaet/wiwi/itwiwi/">IT-Department</Link> of
                the biggest faculty on campus, I administered multiple Linux VMs and developed and maintained a Ruby on Rails App{' '}
                used for organizing most internal data.
                </p> },
              { name: "08/2015 - 09/2015",
                meta: "Smartrac Technology GmbH",
                id: "cv-smartrac",
                description: <p>
                In a summer internship at <Link extern href="https://www.smartrac-group.com">
                Smartrac</Link>, I created an extension for their{' '}
                <Link extern href="https://rfid.averydennison.com/en/home/products-solutions/iot/connected-product-cloud.html">Smart Cosmos</Link> IoT system,
                which enabled sending SMS in connection with IoT events using{' '}
                <Link extern href="https://www.twilio.com">Twilio</Link>.
                </p>
      }]
  }, {
    id: "Contact",
    name: "Contact",
    content: <SocialLinks />
  }]})

export default content;
