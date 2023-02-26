import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MapView from 'react-native-maps';

export const MapPin = styled(Icon).attrs({
  name: 'map-marker-alt',
})`
  z-index: 5;
  position: absolute;
  font-size: ${RFValue(46)}px;
`;

export const MapboxContainer = styled(MapView)`
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;

  border-radius: ${RFValue(16)}px;
  border: 3px solid ${({theme}) => theme.colors.white};
`;

export const Container = styled.View`
  height: 85%;
  width: 100%;

  align-items: center;
  justify-content: center;

  border-radius: ${RFValue(16)}px;
  border: 3px solid ${({theme}) => theme.colors.white};
`;
