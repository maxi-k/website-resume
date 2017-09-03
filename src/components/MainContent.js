import consts from 'constants.json';
import { resumeSections } from "resume.js";
import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import { ItemizedSection, FlowingSection } from "components/ResumeSection";


const ContentHeader = (
    <Header className="ResumeHeader" size="huge" textAlign="center">
      {consts.title}
      <Header.Subheader>
        {consts.person.name}
      </Header.Subheader>
    </Header>
)

const Sections = resumeSections.map((section) => {
    if (section.items) {
        return <ItemizedSection key={section.id} id={section.id} name={section.name} items={section.items} />
    } else {
        return <FlowingSection key={section.id} id={section.id} name={section.name} content={section.content} />
    }
});

export { ContentHeader, Sections }

const MainContent = () => {
    return (
        <Container>
          { ContentHeader }
          { Sections }
        </Container>
    );
}

export default MainContent
