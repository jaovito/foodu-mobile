import React from 'react';
import chefImg from '../../../assets/chef.png';
import {ImageBackgroundProps} from './image-background.props';

import {Container} from './image-background.styles';

export const ImageBackground = ({children, ...rest}: ImageBackgroundProps) => {
  return (
    <Container source={chefImg} {...rest}>
      {children}
    </Container>
  );
};
