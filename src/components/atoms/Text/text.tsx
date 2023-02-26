import * as React from 'react';
import {Container} from './text.styles';
import {TextProps} from './text.props';

export const Text = ({children, fontWeight, ...rest}: TextProps) => (
  <Container fontWeight={fontWeight} {...rest}>
    {children}
  </Container>
);
