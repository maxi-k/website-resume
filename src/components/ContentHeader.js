import { t } from 'content';
import React from 'react';
import { useScheme } from 'style'
import { Container, Header } from 'semantic-ui-react';
import { SocialLinks } from 'components/SocialLinks'

export const ContentHeader = () => (
  <>
    <Header className={`ResumeHeader ${useScheme().className}`} size="huge" textAlign="center">
      <h1>{t('person.name')}</h1>
      <Header.Subheader className="ResumeSubheader">
        <p>{t('person.occupation')}</p>
      </Header.Subheader>
    </Header>
    <Container textAlign='center'>
      <SocialLinks />
    </Container>
  </>
)
