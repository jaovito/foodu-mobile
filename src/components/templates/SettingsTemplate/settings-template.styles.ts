import styled from 'styled-components/native';
import {Button as CButton} from '@components/atoms/Button';
import {Profile as CProfile} from '@components/molecules/Profile';
import {OptionList as COptionList} from '@components/organisms/OptionList/option-list';
import {RFValue} from 'react-native-responsive-fontsize';
import {Text} from '@components/atoms/Text';

export const Container = styled.View`
  width: 100%;
  flex: 1;

  align-items: center;
  justify-content: space-between;
  gap: ${RFValue(16)}px;
`;

export const Profile = styled(CProfile)``;

export const OptionList = styled(COptionList)``;

export const Button = styled(CButton)``;

export const Wallet = styled(Text)`
  color: ${({theme}) => theme.colors.primary};
`;

export const Value = styled(Text)`
  color: ${({theme}) => theme.colors.primary};
`;
