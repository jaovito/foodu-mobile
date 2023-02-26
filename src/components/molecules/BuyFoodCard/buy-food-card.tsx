import React from 'react';
import {BuyFoodCardProps} from './buy-food-card.props';
import {
  Container,
  Image,
  InfoContainer,
  Title,
  Address,
  PriceInfo,
  Price,
  IconContainer,
  PlusIcon,
} from './buy-food-card.styles';

import defaultChefImg from '../../../assets/defaultChef.png';

export const BuyFoodCard = ({
  name,
  about,
  image,
  nameProps,
  aboutProps,
  imageProps,
  price,
  ...rest
}: BuyFoodCardProps) => {
  return (
    <Container {...rest}>
      <Image
        resizeMode={image ? 'cover' : 'contain'}
        source={image ? {uri: image} : defaultChefImg}
        {...imageProps}
      />

      <InfoContainer>
        <Title fontWeight="semiBold" {...nameProps}>
          {name}
        </Title>
        <Address numberOfLines={2} {...aboutProps}>
          {about}
        </Address>

        <PriceInfo>
          <Price fontWeight="bold">${price.toFixed(2)}</Price>

          <IconContainer>
            <PlusIcon />
          </IconContainer>
        </PriceInfo>
      </InfoContainer>
    </Container>
  );
};
