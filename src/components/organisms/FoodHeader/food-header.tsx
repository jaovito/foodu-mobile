import React from 'react';
import {BackFavoriteHeader} from '@components/molecules/BackFavoriteHeader';

import defaultChefImg from '../../../assets/defaultChef.png';
import {FoodHeaderProps} from './food-header.props';
import {Container, Image} from './food-header.styles';

export const FoodHeader = ({
  onFavorite,
  onGoBack,
  foodId,
  image,
}: FoodHeaderProps) => {
  return (
    <Container>
      <BackFavoriteHeader
        onFavorite={() => onFavorite(foodId)}
        onGoBack={onGoBack}
      />

      <Image
        source={
          image
            ? {
                uri: image,
              }
            : defaultChefImg
        }
      />
    </Container>
  );
};
