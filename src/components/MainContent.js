import { t } from 'content';
import React from 'react';
import { useScheme } from 'style'
import { Container, Header, Divider } from 'semantic-ui-react';
import { SkillLevels } from 'components/SkillLevel'
import { ItemizedSection, FlowingSection } from "components/ResumeSection";
import LanguageButtons from 'components/LanguageButtons'

const ContentHeader = () => (
    <Header className={`ResumeHeader ${useScheme().className}`} size="huge" textAlign="center">
      {t('title')}
      <Header.Subheader>{t('person.name')}</Header.Subheader>
    </Header>
)

const Sections = ({ sections }) => (
    sections.map((section) => {
        if (section.items) {
            return <ItemizedSection key={section.id} id={section.id}
                                    name={section.name} items={section.items} />
        } else {
            return <FlowingSection key={section.id} id={section.id}
                                   name={section.name} content={section.content} />
        }
    })
)

export { ContentHeader, Sections }

const MainContent = () => {
    return (<Container>
              <ContentHeader />
              <Container textAlign='center'>
                <LanguageButtons />
                <Divider horizontal section as="h2" />
                <SkillLevels />
              </Container>
              <Sections sections={t('resumeSections')} />
            </Container>);
}

export default MainContent
