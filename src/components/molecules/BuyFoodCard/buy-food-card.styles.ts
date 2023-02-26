import styled from 'styled-components/native';
import {Text} from '@components/atoms/Text';

import Feather from 'react-native-vector-icons/Feather';

import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity`
  width: ${RFValue(155)}px;

  align-items: center;
  justify-content: center;

  border-radius: ${RFValue(8)}px;
  border: 2px solid rgba(0, 0, 0, 0.1);
`;

export const Image = styled.Image`
  width: 100%;
  height: ${RFValue(100)}px;

  border-top-right-radius: ${RFValue(6)}px;
  border-top-left-radius: ${RFValue(6)}px;
`;

export const InfoContainer = styled.View``;

export const Title = styled(Text)`
  font-size: ${RFValue(15)}px;
  line-height: ${RFValue(18)}px;
  margin-top: ${RFValue(8)}px;

  padding: 0 ${RFValue(8)}px;
`;

export const Address = styled(Text)`
  font-size: ${RFValue(11)}px;
  padding: 0 ${RFValue(8)}px;
`;

export const PriceInfo = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: ${RFValue(8)}px;

  margin-top: ${RFValue(8)}px;
`;

export const Price = styled(Text)`
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.primary};
`;

export const IconContainer = styled.View`
  width: ${RFValue(24)}px;
  height: ${RFValue(24)}px;
  border-radius: ${RFValue(12)}px;

  align-items: center;
  justify-content: center;

  background-color: ${({theme}) => theme.colors.primary};
`;

export const PlusIcon = styled(Feather).attrs({
  name: 'plus',
})`
  color: ${({theme}) => theme.colors.light_text};
  font-size: ${RFValue(14)}px;
`;
