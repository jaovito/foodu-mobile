import {RectButton} from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';
import {Text} from '@components/atoms/Text';
import {RFValue} from 'react-native-responsive-fontsize';
import {View} from 'react-native';

export const Container = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: ${RFValue(8)}px;
  border-radius: ${RFValue(8)}px;

  background-color: ${({theme}) => theme.colors.shape200};
`;

export const InfoContainer = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(16)}px;
  bottom: ${RFValue(1.3)}px;

  margin-right: ${RFValue(8)}px;
`;

export const ArrowRight = styled(Feather)`
  font-size: ${RFValue(18)}px;
`;

export const Title = styled(Text)`
  font-size: ${RFValue(16)}px;
`;
