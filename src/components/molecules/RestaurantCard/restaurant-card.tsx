import React from 'react';
import {RestaurantCardProps} from './restaurant-card.props';
import {
  Container,
  Image,
  InfoContainer,
  Title,
  Address,
  SeeMore,
} from './restaurant-card.styles';

import defaultChefImg from '../../../assets/defaultChef.png';
import {LanguagePaths} from '@translations/enumns/LanguagePaths';
import {translate} from '@translations/index';

export const RestaurantCard = ({
  name,
  address,
  image,
  nameProps,
  addressProps,
  imageProps,
  ...rest
}: RestaurantCardProps) => {
  return (
    <Container {...rest}>
      <Image source={image ? {uri: image} : defaultChefImg} {...imageProps} />

      <InfoContainer>
        <Title {...nameProps}>{name}</Title>
        <Address {...addressProps}>{address}</Address>

        <SeeMore>{translate(LanguagePaths.GENERAL_SEE_MORE)}</SeeMore>
      </InfoContainer>
    </Container>
  );
};
