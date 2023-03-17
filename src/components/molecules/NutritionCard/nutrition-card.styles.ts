import {Text} from '@components/atoms/Text';
import {View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(View)`
  border: 1px solid ${({theme}) => theme.colors.primary};
  border-radius: ${RFValue(10)}px;
  padding: ${RFValue(8)}px;

  min-width: ${RFValue(90)}px;
`;

export const Title = styled(Text).attrs({
  fontWeight: 'medium',
})`
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.primary};
  margin-bottom: ${RFValue(8)}px;
`;

export const Info = styled(Text).attrs({
  fontWeight: 'medium',
})`
  font-size: ${RFValue(16)}px;
  color: ${({theme}) => theme.colors.oil};
`;
