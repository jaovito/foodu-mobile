import React from 'react';
import {ArrowButtonProps} from './arrow-button.props';
import {ArrowIcon, Container} from './arrow-button.styles';

export const ArrowButton = ({iconProps, ...rest}: ArrowButtonProps) => {
  return (
    <Container activeOpacity={0.9} testID="ArrowButtonID" {...rest}>
      <ArrowIcon name="arrow-right" {...iconProps} />
    </Container>
  );
};
