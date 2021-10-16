import React from 'react';
import { Icon } from 'semantic-ui-react';
import { Link } from 'components/Link'
import { t } from 'content';

export const Publication = ({ title, authors, type, link, abstract }) => {
    return (
        <div className="Publication">
          <span className="Publication-Title">{title}</span>
          <span className="Publication-Authors">{authors.join(", ")}</span>
          <Link className="Publication-Link" extern={true} href={link} nohighlight={false}>
            <Icon name="file pdf" />
            <span>{t('publication.readFull')}</span>
          </Link>
        </div>
    );
}
