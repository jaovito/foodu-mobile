import {Text} from '@components/atoms/Text';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  padding: ${RFValue(20)}px;
  background-color: ${({theme}) => theme.colors.primary};
  border-radius: ${RFValue(30)}px;

  margin: 0 ${RFValue(41)}px ${RFValue(31)}px;

  align-items: center;
  justify-content: center;
`;

export const Title = styled(Text)`
  font-size: ${RFValue(32)}px;
  line-height: ${RFValue(38.4)}px;
  font-family: ${({theme}) => theme.fontFamily.semiBold};
  text-align: center;

  color: ${({theme}) => theme.colors.light_text};
`;

export const Description = styled(Text)`
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(21)}px;
  font-family: ${({theme}) => theme.fontFamily.regular};
  text-align: center;

  color: ${({theme}) => theme.colors.light_text};

  margin: ${RFValue(10)}px 0 ${RFValue(35)}px;
`;
