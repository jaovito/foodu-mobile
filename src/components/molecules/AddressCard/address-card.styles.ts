import {Text} from '@components/atoms/Text';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  padding: ${RFValue(16)}px;
  margin-bottom: ${RFValue(16)}px;
  border-radius: ${RFValue(4)}px;
  background-color: ${({theme}) => theme.colors.white};
`;

export const Address = styled(Text).attrs({
  fontWeight: 'semiBold',
})`
  font-size: ${RFValue(16)}px;
  margin-bottom: ${RFValue(16)}px;
`;

export const PostalCode = styled(Text)`
  font-size: ${RFValue(12)}px;
`;

export const City = styled(Text)`
  font-size: ${RFValue(12)}px;
`;

export const State = styled(Text)`
  font-size: ${RFValue(12)}px;
`;
