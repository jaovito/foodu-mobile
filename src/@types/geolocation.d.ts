interface GeolocationMapBoxFeature {
  id: string;
  type: string;
  placeType: string[];
  relevance: number;
  properties: {
    accuracy: string;
  };
  text: string;
  place_name: string;
  center: number[];
  context: {
    id: string;
    text: string;
  }[];
  geometry: {
    type: string;
    coordinates: number[];
  };
}

interface GeolocationMapBox {
  type: string;
  features: GeolocationMapBoxFeature[];
}
