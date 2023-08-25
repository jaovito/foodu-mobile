import {ActivityIndicator as RNActivityIndicator} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;

  z-index: 100;

  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.5);
`;

export const ActivityIndicator = styled(RNActivityIndicator)``;
