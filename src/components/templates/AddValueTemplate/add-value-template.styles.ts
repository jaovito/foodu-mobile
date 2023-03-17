import {PrimaryButton} from '@components/atoms/PrimaryButton';
import {View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const GoBack = styled(PrimaryButton)`
  position: absolute;
  top: ${RFValue(40)}px;

  left: ${RFValue(24)}px;
`;
