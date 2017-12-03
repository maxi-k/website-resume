import React from 'react';
import { Icon } from 'semantic-ui-react';
import { getContent } from 'content';


const rawLinks = getContent('social'),
      linkList = rawLinks.map(
          (item, idx) =>
              <a key={item.name} title={item.name} name={item.name} href={item.path}>
              <Icon name={item.icon} size="large" />
              </a>)

const SocialLinks = () => {
    return (
        <div className="SocialLinks">
          {linkList}
        </div>
    );
}

export default SocialLinks;
