import React from 'react';
import {Input} from '../Input';
import {SearchAddressProps} from './search-address.props';
import {
  Container,
  InputContainer,
  PrimaryButton,
} from './search-address.styles';

export const SearchAddress = ({
  inputProps,
  primaryButtonProps,
}: SearchAddressProps) => {
  return (
    <Container>
      <InputContainer>
        <Input {...inputProps} />
      </InputContainer>

      <PrimaryButton iconName="search" {...primaryButtonProps} />
    </Container>
  );
};
