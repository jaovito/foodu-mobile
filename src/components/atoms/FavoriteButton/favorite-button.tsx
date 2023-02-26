import React from 'react';
import {FavoriteButtonProps} from './favorite-button.props';
import {HeartIcon, Container} from './favorite-button.styles';

export const FavoriteButton = (props: FavoriteButtonProps) => {
  return (
    <Container testID="FavoriteButtonID" {...props}>
      <HeartIcon />
    </Container>
  );
};
