import React from 'react';
import { Icon } from 'semantic-ui-react';
import { getContent } from 'content';
import { Link } from 'components/Link'


const rawLinks = getContent('social'),
      linkList = rawLinks.map(
          (item, idx) =>
              <Link className="icon-link" key={item.name} title={item.name} name={item.name} href={item.path}>
              <Icon name={item.icon} size="large" />
              </Link>)

export const SocialLinks = () => {
    return (
        <div className="PersonalLinks">
          {linkList}
        </div>
    );
}
