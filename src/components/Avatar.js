import portrait from "img/me.jpg";
import React from 'react';
import { Image } from 'semantic-ui-react';

export const Avatar = () => (
  <Image src={portrait} fluid circular/>
)
