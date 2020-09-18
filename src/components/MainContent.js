import { t } from 'content';
import React from 'react';
import { useScheme } from 'style'
import { Container, Header, Divider } from 'semantic-ui-react';
import { SkillLevels } from 'components/SkillLevel'
import { ItemizedSection, FlowingSection } from "components/ResumeSection";
import LanguageButtons from 'components/LanguageButtons'

export const ContentHeader = () => (
  <Container>
    <Header className={`ResumeHeader ${useScheme().className}`} size="huge" textAlign="center">
      {t('title')}
      <Header.Subheader>{t('person.name')}</Header.Subheader>
    </Header>
    <Container className="ResumeSubheader" textAlign='center'>
      <LanguageButtons />
      <Divider horizontal section as="h2" />
      <SkillLevels />
    </Container>
  </Container>
)

export const Sections = ({ sections }) => (
    sections.map((section) => {
        if (section.items) {
            return <ItemizedSection key={section.id} id={section.id}
                                    header={section.header} name={section.name}
                                    items={section.items} />
        } else {
            return <FlowingSection key={section.id} id={section.id}
                                   header={section.header} name={section.name}
                                   content={section.content} />
        }
    })
)

export const ResumeContent = () => {
    return (<Container>
              <Sections sections={t('resumeSections')} />
            </Container>);
}

