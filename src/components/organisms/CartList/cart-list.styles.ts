import {FlatList} from 'react-native';
import styled from 'styled-components/native';
import {CartCard as CCartCard} from '@components/molecules/CartCard';

export const Container = styled.FlatList.attrs({
  contentContainerStyle: {},
})`
  height: 90%;
` as unknown as typeof FlatList;

export const CartCard = styled(CCartCard)``;
