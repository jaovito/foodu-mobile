import React from 'react';
import {MapProps} from './map.props';
import {Container, MapboxContainer, MapPin} from './map.styles';

export const Map = ({location, onRegionChange}: MapProps) => {
  return (
    <Container>
      <MapboxContainer
        initialRegion={{
          latitude: location.latitude ?? 37.78825,
          longitude: location.longitude ?? -122.4324,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        onRegionChange={onRegionChange}>
        <MapPin color="red" />
      </MapboxContainer>

      <MapPin color="red" />
    </Container>
  );
};
