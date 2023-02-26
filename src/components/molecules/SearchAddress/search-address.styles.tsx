import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {PrimaryButton as CPrimaryButton} from '@components/atoms/PrimaryButton';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const InputContainer = styled.View`
  width: 85%;
`;

export const PrimaryButton = styled(CPrimaryButton)`
  top: ${RFValue(5)}px;
`;
