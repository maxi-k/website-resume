import 'css/App.css';
import React from 'react';
import { Grid, Container } from 'semantic-ui-react';
import MainContent from 'components/MainContent';
import Sidebar from 'components/Sidebar';

const widthDefs = {
    mainWidths: { largeScreen: 10, widescreen: 10, computer: 10, tablet: 10, mobile: 16 },
    sideWidths: { largeScreen:  6, widescreen:  6, computer:  6, tablet:  6, mobile: 16 }
}

const App = () => {
    let { mainWidths, sideWidths } = widthDefs;
    return (
        <Container className="App">
          <Grid stackable relaxed padded reversed="mobile">
            <Grid.Column {...mainWidths} >
              <MainContent />
            </Grid.Column>
            <Grid.Column {...sideWidths} >
              <Sidebar />
            </Grid.Column>
          </Grid>
        </Container>
    );
}

export default App;
