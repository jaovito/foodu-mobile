import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {ImageBackground} from '@components/atoms/ImageBackground';
import {Text} from '@components/atoms/Text';

import Feather from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  height: ${RFValue(250)}px;
`;

export const Background = styled(ImageBackground)`
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Title = styled(Text)`
  margin-left: ${RFValue(20)}px;
  color: ${({theme}) => theme.colors.light_text};
  font-size: ${RFValue(32)}px;
`;

export const City = styled(Text)`
  font-size: ${RFValue(15)}px;
  color: ${({theme}) => theme.colors.light_text};

  margin: ${RFValue(8)}px 0 ${RFValue(16)}px ${RFValue(20)}px;
`;

export const YourLocation = styled(Text)`
  margin-left: ${RFValue(20)}px;
  color: ${({theme}) => theme.colors.light_text};
  font-size: ${RFValue(14)}px;

  margin-top: ${RFValue(75)}px;
`;

export const LocationIcon = styled(Feather).attrs({
  name: 'map-pin',
})``;
