import {FlatList} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {Text} from '@components/atoms/Text';
import {TextProps} from '@components/atoms/Text/text.props';

export const Container = styled.View`
  min-height: ${RFValue(200)}px;

  align-items: center;
  justify-content: center;

  width: 80%;
`;

export const Title = styled(Text).attrs({
  fontWeight: 'medium',
} as TextProps)`
  font-size: ${RFValue(24)}px;
  margin-bottom: ${RFValue(15)}px;
`;

export const List = styled.FlatList`
  width: 100%;
` as unknown as typeof FlatList;
