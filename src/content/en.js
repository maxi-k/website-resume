import React from 'react';
import SocialLinks from 'components/SocialLinks';

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
                description: <p>
                Beginning with Java as a teenager by creating and publishing
                multiple minecraft mods, I have since gathered a lot more experience
                creating Java applications at my <a href="#cv-smartrac">
                Summer Internship</a> at <a href="https://www.smartrac-group.com" target="_new">
                Smartrac</a> in 2015.
                </p> },
              { name: "Clojure",
                meta: "The Awesome Tech",
                description: <p>
                First encountering the language while writing a seminar paper
                on 4D-Rotation in high school, I decided to write the {' '}
                <a href="https://github.com/maxi-k/drawer" target="_new">accompanying Software</a>{' '}
                in <a href="https://reagent-project.github.io" target="_new">ClojureScript + React</a>{' '}
                and have been using and loving it ever since.
                </p> },
              { name: "Web",
                meta: "Unlimited Possibilities",
                description: <p>
                Leaving aside the basics (HTML, CSS, Sass, JS, ES6),
                the frameworks (Bootstrap, Materialize, Semantic-UI) and the{' '}
                <a href="https://en.m.wikipedia.org/wiki/The_Good,_the_Bad_and_the_Ugly" target="_new">ugly</a> (PHP),
                I am really enjoying <a href="https://facebook.github.io/react/" target="_new">React</a> at
                the moment &ndash; in fact,{' '}
                <a href="https://github.com/maxi-k/website-resume" target="_new" title="Overkill, I know">
                this Website is written using it</a>, as well as various other projects I've done.
                </p> },
              { name: "Ruby",
                meta: "Did someone say Rails?",
                description: <p>
                I have developed and maintained a Rails application
                at <a href="#cv-itwiwi">my job</a> at the IT-department of
                the Faculty of Business and Economics at the University of Augsburg
                for almost two Years.
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
          name: "Education",
          items: [
              { name: "08/2015 - 08/2018",
                meta: "Bachelor of Science, University of Augsburg",
                description: <p>
                I am currently a student at the University of Augsburg, studying{' '}
                <a href="https://www.informatik.uni-augsburg.de/studium/studiengaenge/bachelor_inginf.html"
                target="_new">Computer Science and Engineering</a> with the goal of
                getting my bachelors degree in the summer of 2018.
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
              { name: "10/2017 - now",
                meta: "Integer IT",
                id: "cv-integer",
                description: <p>
                I am currently working at a small IT Firm, where I am responsible for developing and
                maintaining internal software projects. I am also the go-to guy when it comes to
                developing software for customers.
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
                <a href="https://www.smart-cosmos.com">Smart Cosmos</a> IoT System using Java,
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
