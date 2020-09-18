import 'css/App.css';
import React from 'react';
import { T } from 'content'
import { useMediaPredicate } from 'react-media-hook'
import { Grid, Container } from 'semantic-ui-react'
import { ResumeContent } from 'components/MainContent'
import { Avatar } from 'components/Avatar'
import { ContentHeader } from 'components/ContentHeader'
import { LanguageButtons } from 'components/LanguageButtons'

const widthDefs = {
    mainWidths: { largeScreen:  6, widescreen:  6, computer:  6, tablet: 10, mobile: 16 },
    sideWidths: { largeScreen:  4, widescreen:  4, computer:  4, tablet:  6, mobile: 16 },
    fullWidths: { largeScreen: 10, widescreen: 10, computer: 10, tablet: 16, mobile: 16 },
}

const PrintApp = () => (
    <Container className="App">
      <ContentHeader/>
      <ResumeContent/>
      <Avatar />
    </Container>
)

const ScreenApp = ({ mainWidths, sideWidths, fullWidths, restWidths }) => {
  const displayAside = useMediaPredicate("(min-width: 768px)");;
  return (
    <Container className="App">
        <Grid centered stackable relaxed padded className="App-Grid">
          <Grid.Row>
            <Grid.Column {...mainWidths}>
              <ContentHeader/>
            </Grid.Column>
            { displayAside &&
              <Grid.Column {...sideWidths}>
                <Avatar />
              </Grid.Column>
            }
          </Grid.Row>
          <Grid.Row>
            <Grid.Column {...fullWidths}>
              <Container align="center">
                <LanguageButtons/>
              </Container>
              <ResumeContent />
            </Grid.Column>
          </Grid.Row>
        </Grid>
     </Container>
  );
}

const RawApp = () => {
    const isPrint = useMediaPredicate("(only print)");
    return isPrint ? <PrintApp /> : <ScreenApp {...widthDefs} />
}

const App = () => <T as={RawApp} />

export default App;
