import { t } from 'content';
import React from 'react';
import { Container } from 'semantic-ui-react';
import { ItemizedSection, FlowingSection } from "components/ResumeSection";

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

