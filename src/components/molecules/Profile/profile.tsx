import {Avatar} from '@components/atoms/Avatar';
import React from 'react';
import {ProfileProps} from './profile.props';
import {Container, InfoContainer, Name, Email} from './profile.styles';

export const Profile = ({
  name,
  email,
  image,
  avatarProps,
  nameProps,
  emailProps,
  ...rest
}: ProfileProps) => {
  return (
    <Container {...rest}>
      <Avatar source={{uri: image}} {...avatarProps} />

      {(name || email) && (
        <InfoContainer>
          <Name fontWeight="semiBold" numberOfLines={1} {...nameProps}>
            {name}
          </Name>
          <Email fontWeight="regular" numberOfLines={1} {...emailProps}>
            {email}
          </Email>
        </InfoContainer>
      )}
    </Container>
  );
};
