import {FlatList} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.FlatList`
  width: 100%;
` as unknown as typeof FlatList;

export const Separator = styled.View`
  margin-top: ${RFValue(8)}px;
`;
