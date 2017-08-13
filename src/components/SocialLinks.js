import React from 'react';
import { Icon } from 'semantic-ui-react';
import consts from 'constants.json';

const rawLinks = consts.social,
      linkList = rawLinks.map(
          (item, idx) =>
              <a key={item.name} title={item.name} name={item.name} href={item.path}>
              <Icon name={item.icon} size="large" />
              </a>)

const SocialLinks = () => {
    return (
        <div className="centered-text">
          {linkList}
        </div>
    );
}

export { linkList, rawLinks };
export default SocialLinks;
