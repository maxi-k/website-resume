import 'css/App.css';
import React from 'react';
import { T, t } from 'content'
import { useMediaPredicate } from 'react-media-hook'
import { Grid, Container } from 'semantic-ui-react'
import { ResumeContent, ContentHeader, Sections } from 'components/MainContent'
import Sidebar from 'components/Sidebar'

const widthDefs = {
    mainWidths: { largeScreen: 10, widescreen: 10, computer: 10, tablet: 10, mobile: 16 },
    sideWidths: { largeScreen:  6, widescreen:  6, computer:  6, tablet:  6, mobile: 16 }
}

const PrintApp = () => (
    <Container className="App">
      <ContentHeader />
      <Sections sections={t('resumeSections')} />
      <Sidebar />
    </Container>
)

const ScreenApp = ({ mainWidths, sideWidths }) => (
   <Container className="App">
      <Grid stackable relaxed padded className="App-Grid">
        <Grid.Row columns={1}>
          <ContentHeader/>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column {...mainWidths} className="MainContent-Wrapper" >
            <ResumeContent />
          </Grid.Column>
          <Grid.Column {...sideWidths} className="Sidebar-Wrapper" >
            <Sidebar />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
)

const RawApp = () => {
    const isPrint = useMediaPredicate("(only print)");
    return isPrint ? <PrintApp /> : <ScreenApp {...widthDefs} />
}

const App = () => <T as={RawApp} />

export default App;
