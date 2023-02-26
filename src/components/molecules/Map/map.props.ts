import {Region} from 'react-native-maps';

interface Location {
  latitude: number;
  longitude: number;
}

export interface MapProps {
  location: Location;
  onRegionChange: (region: Region) => void;
}
