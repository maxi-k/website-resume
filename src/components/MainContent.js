import { t } from 'content';
import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import { ItemizedSection, FlowingSection } from "components/ResumeSection";
import LanguageButtons from 'components/LanguageButtons'

const ContentHeader = () => (
    <Header className="ResumeHeader" size="huge" textAlign="center">
      {t('title')}
      <Header.Subheader>{t('person.name')}</Header.Subheader>
    </Header>
)

const Sections = ({ sections }) => {
    const rendered = sections.map((section) => {
        if (section.items) {
            return <ItemizedSection key={section.name} name={section.name} items={section.items} />
        } else {
            return <FlowingSection key={section.name} name={section.name} content={section.content} />
        }
    });
    return <div>
        { rendered }
    </div>
}

const MainContent = () => {
    return (<Container>
            <ContentHeader />
            <Container textAlign='center'>
            <LanguageButtons />
            </Container>
            <Sections sections={t('resumeSections')} />
            </Container>);
}

export default MainContent
