import {Text} from '@components/atoms/Text';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${RFValue(4)}px;

  border-radius: ${RFValue(26)}px;

  width: ${RFValue(130)}px;

  background-color: ${({theme}) => theme.colors.primary100};
`;

export const CounterText = styled(Text)`
  color: ${({theme}) => theme.colors.oil};
  font-size: ${RFValue(24)}px;
`;
