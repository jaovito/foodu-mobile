import React from 'react';
import {TextButtonProps} from './text-button.props';
import {Container, Text} from './text-button.styles';

export const TextButton = ({
  children,
  textProps,
  ...props
}: TextButtonProps) => {
  return (
    <Container activeOpacity={0.7} {...props}>
      <Text {...textProps}>{children}</Text>
    </Container>
  );
};
