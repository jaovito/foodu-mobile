import {Text} from '@components/atoms/Text';
import {View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(View)`
  flex-direction: row;
  align-items: center;
  gap: ${RFValue(16)}px;

  width: 100%;
`;

export const InfoContainer = styled(View)``;

export const Name = styled(Text)`
  font-size: ${RFValue(16)}px;
`;

export const Email = styled(Text)``;
