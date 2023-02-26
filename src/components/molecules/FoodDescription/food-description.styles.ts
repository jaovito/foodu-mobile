import {Text} from '@components/atoms/Text';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View``;

export const Title = styled(Text)`
  font-size: ${RFValue(18)}px;
  margin-bottom: ${RFValue(16)}px;
`;

export const Description = styled(Text)`
  font-size: ${RFValue(14)}px;
`;
