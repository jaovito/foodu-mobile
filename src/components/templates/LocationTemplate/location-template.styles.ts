import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {FlatList} from 'react-native';

export const Container = styled.View`
  flex: 1;
  padding-top: ${RFValue(58)}px;
`;
export const Title = styled.Text`
  margin: 0 ${RFValue(24)}px ${RFValue(15)}px;
`;

export const Main = styled.View`
  width: 100%;
  height: 80%;

  padding: 0 ${RFValue(24)}px;
`;

export const List = styled.FlatList.attrs({
  contentContainerStyle: {
    marginTop: RFValue(14),
  },
})`` as unknown as typeof FlatList;
