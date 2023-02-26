import {FlatList} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View``;

export const List = styled.FlatList.attrs({
  contentContainerStyle: {
    margin: RFValue(14),
  },
  columnWrapperStyle: {justifyContent: 'space-between'},
})`` as unknown as typeof FlatList;

export const Image = styled.Image`
  position: absolute;
  z-index: -1;

  width: 100%;
  height: ${RFValue(392)}px;
`;
