import React from 'react';
import SocialLinks from 'components/SocialLinks';
import SkillLevel from 'components/SkillLevel';

const content = (
    { lang: "en",
      title : "Resume",
      person: {
          occupation: "Student, Developer"
      },
      resumeSections: [{
          id: "Skills",
          name: "Skills",
          items: [
              { name: "Java",
                meta: "The Workhorse",
                description:
                <SkillLevel level={95} githubFilter="java" >
                I used Java and Scala in muliple private and university projects,
                as well as at my internships at <a href="#cv-oracle">Oracle</a> and <a href="#cv-smartrac">Smartrac</a>.
                Most of my <a href="https://github.com/maxi-k/bachelor-code" target="_new">Bachelor Thesis</a> is
                implemented with it.
                </SkillLevel>
              },
              { name: "Clojure",
                meta: "λ x y . x",
                description:
                <SkillLevel level={55} githubFilter="clojure">
                After learning Clojure(Script) when implementing a website for 4d rotation for a paper in school,
                I have last used it for implementing the{' '}
                <a href="https://en.wikipedia.org/wiki/Beer_distribution_game" target="_new">Beer Distribution Game</a>{' '}
                using fullstack Clojure and ClojureScript with websockets.
                </SkillLevel>
              },
              { name: "C++",
                meta: "Efficiency²",
                description:
                <SkillLevel level={70} githubFilter="C++">
                I implemented various parts of databases in C++ for university, and used it extensively during
                my masters thesis.
                </SkillLevel>
              },
              {
                  name: "JavaScript",
                  meta: "hype.js",
                  description:
                  <SkillLevel level={90} githubFilter="JavaScript">
                  I've implemented more frontends and backends in more frameworks than I can count,
                  from Node + JavaScript in the browser to TypeScript and React-Native.
                  </SkillLevel>
              }
          ]
      }, {
          id: "Education",
          name: "Education",
          items: [
              { name: "10/2018 - 2020",
                meta: "Master of Science, Multiple Universities" ,
                description: <p>
                I am part of the <a href="https://elite-se.informatik.uni-augsburg.de/" target="_new">
                Software Engineering Elite Graduate Program
                </a>, with the goal of getting my masters degree in software engineering in 2020.
                As part of the program, I am a student at the University of Augsburg,
                the Technical University of Munich, as well as the Ludwig-Maximilians University in Munich.
                </p>
              },
              { name: "09/2015 - 09/2018",
                meta: "Bachelor of Science, University of Augsburg. Final Grade 1.56 (GPA 3.6~3.8)",
                description: <p>
                Until 2018, I was a student at the University of Augsburg, studying{' '}
                <a href="https://www.informatik.uni-augsburg.de/studium/studiengaenge/bachelor_inginf.html"
                target="_new">Computer Science and Engineering</a>.
                </p>
              },
              { name: "09/2007 - 6/2015",
                meta: "Abitur, Grade 1.2 (A)",
                description: <p>
                I went to the <a href="https://www.jakob-brucker-gymnasium.de" target="_new">
                Jakob-Brucker-Gymnasium</a> in Kaufbeuren (Bavaria),
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
                <a href="https://dbis1.github.io/" target="_new">Databases and Information Systems</a>{' '}
                at the University of Jena while writing my masters thesis there, mentored by{' '}
                <a href="https://dbis1.github.io/team/leis.html" target="_new">Prof. Dr. Viktor Leis</a>.
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
                I worked at the IT Firm <a href="https://integer.de/" target="_new">Integer</a>,
                where I was responsible for developing and maintaining internal software projects.
                Furthermore, I was the go-to guy when it came to software projects for customers,
                many of which I designed and developed from start to finish.
                </p> },
              { name: "01/2016 - 10/2017",
                meta: "IT-Department, Faculty of Business and Economics, University of Augsburg",
                id: "cv-itwiwi",
                description: <p>
                Working at the <a href="http://www.wiwi.uni-augsburg.de/it/" target="_new">IT-Department</a> of
                the biggest faculty on campus, my tasks included administering
                multiple Linux systems in a virtual environment,
                developing and maintaining a Ruby on Rails App, as well as maintaining
                our monitoring system for the 900+ devices in the building.
                </p> },
              { name: "08/2015 - 09/2015",
                meta: "Smartrac Technology GmbH",
                id: "cv-smartrac",
                description: <p>
                In a summer internship at <a href="https://www.smartrac-group.com" target="_new">
                Smartrac</a>, I got to create a server extension for their{' '}
                <a href="https://www.smartrac-group.com/IoT-solutions.html">Smart Cosmos</a> IoT System using Java,
                which enabled it to send SMS in connection with IoT events using{' '}
        <a href="https://www.twilio.com" target="_new">Twilio</a>.
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
