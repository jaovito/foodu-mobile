import {FlatList} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {BuyFoodCard as CBuyFoodCard} from '@components/molecules/BuyFoodCard';

export const Container = styled.FlatList.attrs({
  contentContainerStyle: {
    margin: RFValue(14),
  },
  columnWrapperStyle: {justifyContent: 'space-between'},
})`` as unknown as typeof FlatList;

export const BuyFoodCard = styled(CBuyFoodCard)`
  width: 50%;
`;
