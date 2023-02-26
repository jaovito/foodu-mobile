import styled from 'styled-components/native';
import Heart from '../../../assets/heart.svg';
import {RFValue} from 'react-native-responsive-fontsize';
import {BorderlessButton} from 'react-native-gesture-handler';

export const Container = styled(BorderlessButton)`
  width: ${RFValue(40)}px;
  height: ${RFValue(40)}px;
  border-radius: ${RFValue(20)}px;

  align-items: center;
  justify-content: center;

  border: 1px solid ${({theme}) => theme.colors.white};
`;

export const HeartIcon = styled(Heart)`
  color: ${({theme}) => theme.colors.light_text};
  font-size: ${RFValue(14)}px;
`;
