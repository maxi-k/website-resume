import React from 'react';
import { Icon } from 'semantic-ui-react';
import { Link } from 'components/Link'
import { t } from 'content';

export const Publication = ({ title, authors, type, link, abstract, codeLink = null }) => {
    return (
        <div className="Publication">
          <span className="Publication-Title">{title}</span>
          <span className="Publication-Authors">{authors.join(", ")}</span>
          <div className="Publication-Links">
          <Link extern={true} href={link} nohighlight={false}>
            <Icon name="file alternate" />
            <span>{t('publication.readFull')}</span>
          </Link>
          { codeLink &&
            <Link extern={true} href={codeLink} nohighlight={false} style={{paddingLeft: '.5em'}}>
              <Icon name="file code" />
              <span>{t('publication.readCode')}</span>
            </Link> }
          </div>
        </div>
    );
}
