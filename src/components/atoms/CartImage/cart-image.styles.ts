import {Image as RNImage} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Image = styled(RNImage)`
  width: ${RFValue(127)}px;
  height: ${RFValue(127)}px;
  border-radius: ${RFValue(8)}px;
`;
