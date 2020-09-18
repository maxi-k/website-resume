import portrait from "img/me.jpg";
import { t } from 'content'
import React from 'react';
import { Card } from 'semantic-ui-react';
import SocialLinks from 'components/SocialLinks';


const InfoCard = () => {
    const social = <SocialLinks />
    return (
        <Card className="Sidebar-InfoCard"
              centered raised
              image={portrait}
              header={t('person.name')}
              meta={t('person.occupation')}
              extra={social}>
        </Card>
    );
}

const Sidebar = () => {
    return (
        <div className="InfoCard-Wrapper">
          <InfoCard />
        </div>
    );
}

export default Sidebar
