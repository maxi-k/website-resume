import React from 'react';
import { Grid, Header, Divider } from 'semantic-ui-react';

const Section = ({ id, name, children }) => {
    return (
        <div className={"ResumeSection ResumeSection-" + id}>
          <Divider horizontal section as="h2">
            {name}
          </Divider>
          {children}
        </div>
    );
}

const widthDefs = {
    titleWidths: { largeScreen:  5, widescreen:  5, computer:  5, tablet:  5, mobile: 16 },
    textWidths:  { largeScreen: 11, widescreen: 11, computer: 11, tablet: 11, mobile: 16 }
}

const SectionItem = ({ item }) => {
    let { textWidths, titleWidths } = widthDefs;
    return (
        <Grid.Row>
          <Grid.Column {...titleWidths}>
            <Header size="small"
                    as={item.link ? "a" : "h3"}
                    id={item.id}
                    href={item.link}
                    content={item.name}
                    subheader={item.meta} />
          </Grid.Column>
          <Grid.Column {...textWidths}>
            {item.description}
          </Grid.Column>
        </Grid.Row>
    );
}

const ItemizedSection = ({ id, name, items }) => {
    const renderedItems = items.map(
        (item) => <SectionItem key={item.name} item={item} />)
    return (
        <Section name={name} id={id}>
          <Grid stackable>
            {renderedItems}
          </Grid>
        </Section>
    );
}

const FlowingSection = ({ id, name, content }) => {
    return (
        <Section name={name} id={id}>
          {content}
        </Section>
    );
}

export { Section, ItemizedSection, FlowingSection };
