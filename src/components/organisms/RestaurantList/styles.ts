import {FlatList} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.FlatList.attrs({
  contentContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})`
  margin: ${RFValue(24)}px;
` as unknown as typeof FlatList;
