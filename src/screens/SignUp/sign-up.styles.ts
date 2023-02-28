import {TextButton as CTextButton} from '@components/atoms/TextButton';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  align-items: center;
  justify-content: center;
`;

export const TextButton = styled(CTextButton)`
  margin-top: ${RFValue(16)}px;
  font-size: ${RFValue(11)}px;
`;
