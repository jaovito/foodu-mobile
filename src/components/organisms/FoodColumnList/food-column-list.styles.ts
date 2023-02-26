import {FlatList} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.FlatList.attrs({
  contentContainerStyle: {
    margin: RFValue(14),
  },
  columnWrapperStyle: {justifyContent: 'space-between'},
})`` as unknown as typeof FlatList;
