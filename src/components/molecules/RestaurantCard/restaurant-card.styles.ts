import styled from 'styled-components/native';
import {Text} from '@components/atoms/Text';
import {Button} from '@components/atoms/Button';

import {RFValue} from 'react-native-responsive-fontsize';
import {ButtonProps} from '@components/atoms/Button/button.props';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  padding: ${RFValue(16)}px;

  border-radius: ${RFValue(8)}px;
  border-bottom-width: 1px;
  border-color: rgba(0, 0, 0, 0.1);
`;

export const Image = styled.Image`
  width: ${RFValue(80)}px;
  height: ${RFValue(80)}px;
  border-radius: ${RFValue(6)}px;

  margin-right: ${RFValue(28)}PX;
`;

export const InfoContainer = styled.View``;

export const Title = styled(Text)``;

export const Address = styled(Text)``;

export const SeeMore = styled(Button).attrs({
  textProps: {
    style: {
      fontSize: 16,
      width: 100,
      textAlign: 'center',
    },
  },
} as ButtonProps)`
  padding: ${RFValue(4)}px;
`;
