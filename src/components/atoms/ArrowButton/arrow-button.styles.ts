import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';

export const Container = styled.TouchableOpacity`
  border-radius: ${RFValue(47)}px;

  width: ${RFValue(94)}px;
  height: ${RFValue(94)}px;

  align-items: center;
  justify-content: center;

  background-color: ${({theme}) => theme.colors.button.white};
`;

export const ArrowIcon = styled(Feather)`
  font-size: ${RFValue(36)}px;
  color: ${({theme}) => theme.colors.button.primary};
`;
