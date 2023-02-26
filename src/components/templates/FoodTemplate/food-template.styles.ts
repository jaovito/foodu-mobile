import {Text} from '@components/atoms/Text';
import {Modalize} from 'react-native-modalize';
import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {FoodDescription as CFoodDescription} from '@components/molecules/FoodDescription';

export const Container = styled(Modalize).attrs({
  modalStyle: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 25,
  },
  alwaysOpen: 500,
  panGesureEnabled: false,
})``;

export const Title = styled(Text)`
  color: ${({theme}) => theme.colors.oil};
  font-size: ${RFValue(24)}px;
`;

export const PriceContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: ${RFValue(20)}px;
`;

export const Price = styled(Text)`
  font-size: ${RFValue(24)}px;
  color: ${({theme}) => theme.colors.primary};
`;

export const FoodDescription = styled(CFoodDescription)`
  margin: ${RFValue(32)}px 0;
`;
