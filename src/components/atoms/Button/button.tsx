import React from 'react';

import {ButtonProps} from './button.props';
import {Container, Text} from './button.styles';

export const Button = ({children, textProps, ...rest}: ButtonProps) => {
  return (
    <Container activeOpacity={0.8} testID="ButtonTestID" {...rest}>
      <Text {...textProps}>{children}</Text>
    </Container>
  );
};
