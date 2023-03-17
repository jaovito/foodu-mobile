import {Image as RNImage} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Image = styled(RNImage)`
  width: ${RFValue(80)}px;
  height: ${RFValue(80)}px;
  border-radius: ${RFValue(63.5)}px;

  border-width: ${RFValue(3)}px;
  border-color: ${({theme}) => theme.colors.status.danger};
`;
