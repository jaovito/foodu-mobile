import {InputProps} from '@components/molecules/Input';
import {Region} from 'react-native-maps';

export interface ILocation {
  latitude?: number;
  longitude?: number;
  address?: string;
}

export interface LocationTemplateProps {
  addressInputProps: InputProps;
  onSubmitSearch: () => void;
  title: string;
  location?: {
    latitude?: number;
    longitude?: number;
  };
  addressesSearched?: GeolocationMapBoxFeature[];
  onRegionChange?: (region: Region) => void;
  onPressCard: (location: ILocation) => void;
  onSave?: () => void;
}
