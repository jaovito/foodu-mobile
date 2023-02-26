import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {Text as CText} from '../Text';

export const Container = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  margin-top: ${RFValue(8)}px;
  padding: ${RFValue(16)}px;

  background-color: ${({theme}) => theme.colors.primary};
  border-radius: ${RFValue(8)}px;

  width: 100%;
`;

export const Text = styled(CText)`
  color: ${({theme}) => theme.colors.light_text};
`;
