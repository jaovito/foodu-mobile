import React from 'react';
import {AddressCardProps} from './address-card.props';
import {
  Container,
  Address,
  PostalCode,
  City,
  State,
} from './address-card.styles';

export const AddressCard = ({
  address,
  postalCode,
  city,
  state,
  onPress,
}: AddressCardProps) => {
  return (
    <Container onPress={onPress}>
      <Address>{address}</Address>

      {postalCode && <PostalCode>{postalCode}</PostalCode>}

      {city && <City>{city}</City>}

      {state && <State>{state}</State>}
    </Container>
  );
};
