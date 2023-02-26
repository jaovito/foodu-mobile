import React from 'react';
import {PrimaryButtonProps} from './primary-button.props';
import {Container, Icon} from './primary-button.styles';

export const PrimaryButton = ({
  iconName,
  color,
  ...rest
}: PrimaryButtonProps) => {
  return (
    <Container
      color={color}
      activeOpacity={0.8}
      testID="PrimaryButtonID"
      {...rest}>
      <Icon name={iconName} />
    </Container>
  );
};
