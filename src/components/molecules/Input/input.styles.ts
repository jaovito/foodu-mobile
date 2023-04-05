import styled from 'styled-components/native';
import {Controller} from 'react-hook-form';
import {TextInput} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Text} from '@components/atoms/Text';
import {TextInputMask as RNTextInputMask} from 'react-native-masked-text';
import {InputStyleProps} from './input.props';

export const Container = styled(Controller)``;

export const Input = styled(TextInput)<InputStyleProps>`
  background-color: ${({theme}) => theme.colors.background};
  color: ${({theme}) => theme.colors.oil};
  border-color: ${({theme, error}) =>
    error ? theme.colors.status.danger : theme.colors.shape200};
  border-width: ${RFValue(2)}px;
  width: 100%;

  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.02);

  padding: ${RFValue(16)}px;
  min-height: ${RFValue(56)}px;

  border-radius: ${RFValue(8)}px;
`;

export const Fieldset = styled.View`
  margin-bottom: ${RFValue(6)}px;
  width: 100%;
`;

export const Label = styled(Text)`
  font-size: ${RFValue(14)}px;
  font-family: ${({theme}) => theme.fontFamily.regular};
  color: ${({theme}) => theme.colors.oil};
`;

export const ErrorText = styled(Text)`
  font-size: ${RFValue(12)}px;
  font-family: ${({theme}) => theme.fontFamily.regular};
  color: ${({theme}) => theme.colors.status.danger};
`;

export const TextInputMask = styled(RNTextInputMask)<InputStyleProps>`
  background-color: ${({theme}) => theme.colors.background};
  border-color: ${({theme, error}) =>
    error ? theme.colors.status.danger : theme.colors.shape200};
  border-width: ${RFValue(2)}px;
  width: 100%;
  color: ${({theme}) => theme.colors.oil};

  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.02);

  padding: ${RFValue(16)}px;
  min-height: ${RFValue(56)}px;

  border-radius: ${RFValue(8)}px;
`;
