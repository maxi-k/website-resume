import portrait from "img/me.jpg";
import consts from "constants.json"
import React from 'react';
import { Card } from 'semantic-ui-react';
import SocialLinks from 'components/SocialLinks';

const Sidebar = () => {
    const links = <SocialLinks />
    return (
        <div className="InfoCard-Wrapper">
          <Card className="Sidebar-InfoCard"
                centered raised
                image={portrait}
                header={consts.person.name}
                meta={consts.person.occupation}
                extra={links} />
        </div>
    );
}

export default Sidebar
