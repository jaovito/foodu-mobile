import React from 'react';
import {BackButtonProps} from './back-button.props';
import {BackIcon, Container} from './back-button.styles';

export const BackButton = (props: BackButtonProps) => {
  return (
    <Container testID="BackButtonID" {...props}>
      <BackIcon />
    </Container>
  );
};
