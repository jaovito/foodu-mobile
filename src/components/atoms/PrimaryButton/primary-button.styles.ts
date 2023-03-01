import {BorderlessButton} from 'react-native-gesture-handler';
import {RFValue} from 'react-native-responsive-fontsize';
import Feather from 'react-native-vector-icons/Feather';
import styled from 'styled-components/native';
import {PrimaryButtonStyleProps} from './primary-button.props';

export const Container = styled(BorderlessButton)<PrimaryButtonStyleProps>`
  width: ${RFValue(32)}px;
  height: ${RFValue(32)}px;
  border-radius: ${RFValue(16)}px;

  align-items: center;
  justify-content: center;

  background-color: ${({theme, color}) => color ?? theme.colors.primary};
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(16)}px;
  color: ${({theme}) => theme.colors.light_text};
`;
