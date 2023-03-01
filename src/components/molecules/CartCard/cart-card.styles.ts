import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {CartImage as CCartImage} from '@components/atoms/CartImage/cart-image';
import {Text} from '@components/atoms/Text';
import {PrimaryButton as CPrimaryButton} from '@components/atoms/PrimaryButton';

export const Container = styled.View`
  flex-direction: row;
  align-items: flex-start;
  width: 100%;

  padding: ${RFValue(12)}px ${RFValue(8)}px;
  margin-bottom: ${RFValue(16)}px;

  border: 1px solid rgba(0, 0, 0, 0.04);
  border-radius: ${RFValue(8)}px;
  background-color: ${({theme}) => theme.colors.white};

  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.12);
`;

export const ImageContainer = styled.View`
  margin-right: ${RFValue(8)}px;
  height: ${RFValue(100)}px;
  width: ${RFValue(100)}px;
`;

export const CartImage = styled(CCartImage)`
  width: 100%;
  height: 100%;
`;

export const FoodInfo = styled.View`
  flex: 1;
  align-items: flex-start;
  justify-content: space-between;

  height: 90%;
`;

export const Title = styled(Text)`
  font-size: ${RFValue(18)}px;
`;

export const Description = styled(Text)`
  font-size: ${RFValue(12)}px;

  max-width: 100%;
`;

export const PriceContainer = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  gap: ${RFValue(16)}px;

  margin-top: ${RFValue(8)}px;
`;

export const Price = styled(Text)``;

export const ActionButtons = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${RFValue(8)}px;
`;

export const PrimaryButton = styled(CPrimaryButton)`
  width: ${RFValue(32)}px;
  height: ${RFValue(32)}px;
`;

export const CounterContainer = styled.View`
  position: absolute;
  bottom: ${RFValue(8)}px;
  right: ${RFValue(8)}px;

  align-items: center;
  justify-content: center;

  width: ${RFValue(24)}px;
  height: ${RFValue(24)}px;

  background-color: red;
  border-radius: 100px;
`;

export const Counter = styled(Text)`
  font-size: ${RFValue(12)}px;
  color: ${({theme}) => theme.colors.white};
  line-height: 29px;
`;
