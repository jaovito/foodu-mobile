import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: ${RFValue(80)}px ${RFValue(20)}px 0;
`;
