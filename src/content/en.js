import React from 'react';
import SocialLinks from 'components/SocialLinks';
import Link from 'components/Link'

const content = (
    { lang: "en",
      title : "Resume",
      person: {
          occupation: "Student, Developer"
      },
      github: {
          languages: 'Languages (Github)'
      },
      resumeSections: [{
        id: "Languages",
        name: "Languages",
        items: [
          { name: "Java & Scala",
            meta: "Sounds professional",
            description: <p>
            I used Java and Scala in muliple private and university projects,
            and at my internships at <Link href="cv-oracle">Oracle</Link> and <Link href="#cv-smartrac">Smartrac</Link>.
            Most of my <Link extern href="https://github.com/maxi-k/bachelor-code">bachelor thesis</Link> is
            implemented with Java and <Link extern href="https://projectreactor.io/">Reactive Streams</Link>.
            </p>
          },
          { name: "Clojure",
            meta: "λ x y . x",
            description: <p>
            After learning Clojure(Script) when implementing
            a <Link extern href="https://github.com/maxi-k/drawer">website for 4d rotation</Link> for a paper in school,
            I have last used it for implementing
            the <Link extern href="https://en.wikipedia.org/wiki/Beer_distribution_game">Beer Distribution Game</Link> using
            fullstack Clojure and ClojureScript with websockets.
            </p>
          },
          { name: "C++",
            meta: "Efficiency²",
            description: <p>
            I implemented various parts of databases in C++ for university, and used it extensively during
            my masters thesis.
            </p>
          },
          { name: "JavaScript",
            meta: "hype.js",
            description: <p>
            I've implemented more frontends and backends using more frameworks and libraries than I can count,
                  from Node plus Angular to React-Native with TypeScript.
                </p>
              }
          ]
  }, {
          id: "Education",
          name: "Education",
          items: [
              { name: "10/2018 - 2020",
                meta: "Master of Science, Multiple Universities" ,
                description: <p>
                I am part of the <Link extern href="https://elite-se.informatik.uni-augsburg.de/">
                Software Engineering Elite Graduate Program
                </Link>, with the goal of getting my masters degree in software engineering in 2020.
                As part of the program, I am a student at the University of Augsburg,
                the Technical University of Munich, as well as the Ludwig-Maximilians University in Munich.
                </p>
              },
              { name: "09/2015 - 09/2018",
                meta: "Bachelor of Science, University of Augsburg. Final Grade 1.56 (GPA 3.6~3.8)",
                description: <p>
                Until 2018, I was a student at the University of Augsburg, studying{' '}
                <Link extern href="https://www.informatik.uni-augsburg.de/studium/studiengaenge/bachelor_inginf.html"
               >Computer Science and Engineering</Link>.
                </p>
              },
              { name: "09/2007 - 6/2015",
                meta: "Abitur, Grade 1.2 (A)",
                description: <p>
                I went to the <Link extern href="https://www.jakob-brucker-gymnasium.de">
                Jakob-Brucker-Gymnasium</Link> in Kaufbeuren (Bavaria),
                with an emphasis on humanistic studies (Latin and Ancient Greek).
                </p>
              }
          ]
      }, {
          id: "Working-Experience",
          name: "Working Experience",
          items: [
              { name: "04/2020 - 10/2020",
                meta: "University of Jena",
                id: "cv-job-jena",
                description: <p>
                I am employed at the chair for{' '}
                <Link extern href="https://dbis1.github.io/">Databases and Information Systems</Link>{' '}
                at the University of Jena while writing my masters thesis there, mentored by{' '}
                <Link extern href="https://dbis1.github.io/team/leis.html">Prof. Dr. Viktor Leis</Link>.
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
                Working at the <Link extern href="http://www.wiwi.uni-augsburg.de/it/">IT-Department</Link> of
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
                <Link extern href="https://www.smartrac-group.com/IoT-solutions.html">Smart Cosmos</Link> IoT system using Java,
                which enabled it to send SMS in connection with IoT events using{' '}
                <Link extern href="https://www.twilio.com">Twilio</Link>.
                </p>
      }]
  }, {
    id: "Certificates",
    name: "Certificates",
    items: [
      { name: "Advanced English",
        meta: "Language Level C2",
        description: <p>
        In 2015 I acquired the Cambridge Advanced English Certificate
        in ESOL International, reaching Grade A, which corresponds to the
        Council of Europe Level C2.
        </p>
      }]
  }, {
    id: "Contact",
    name: "Contact",
    content: <SocialLinks />
  }]})

export default content;
