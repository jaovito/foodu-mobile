import React, {useCallback, useEffect, useState} from 'react';
import env from '../../../.env.json';

import * as ExpoLocation from 'expo-location';
import {locationValidator} from '@validators/location-validator';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';

import {Alert} from 'react-native';

import {store} from '@store/index';
import {IFormValues} from './location.props';
import axios from 'axios';
import {
  ILocation,
  LocationTemplate,
} from '@components/templates/LocationTemplate';
import {translate} from '@translations/index';
import {LanguagePaths} from '@translations/enumns/LanguagePaths';
import {Region} from 'react-native-maps';
import {observer} from 'mobx-react';
import {useNavigate} from '@hooks/useNavigate';
import {Loading} from '@components/atoms/Loading';

export const Location = observer(() => {
  const {
    location: {
      latitude,
      longitude,
      changeLocation,
      address,
      isSavedLocation,
      changeIsSavedLocation,
    },
  } = store;

  const [locations, setLocations] = useState<GeolocationMapBoxFeature[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [coordsLocation, setCoordsLocation] = useState<ILocation | undefined>({
    latitude: latitude || undefined,
    longitude: longitude || undefined,
    address: address || undefined,
  });
  const {navigate} = useNavigate();

  useEffect(() => {
    if (isSavedLocation) {
      navigate('Restaurants');
    }
  }, []);

  useEffect(() => {
    (async () => {
      if (!latitude || !longitude) {
        let {status} = await ExpoLocation.requestForegroundPermissionsAsync();
        if (status !== 'granted' && (!address || !latitude || !longitude)) {
          Alert.alert(
            'Permissão negada',
            'Para melhor uso do app, ative as permissões de localização, isso irá ajudar a localizar os restaurantes próximos',
          );
          setLoading(false);
          return;
        }

        const location = await ExpoLocation.getCurrentPositionAsync();

        store.location?.changeLocation({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });
      }

      setLoading(false);
    })();
  }, []);

  const {
    control,
    handleSubmit,
    setValue,
    formState: {errors},
  } = useForm<IFormValues>({
    resolver: yupResolver(locationValidator),
  });

  const onSubmit = async (data: IFormValues) => {
    setLoading(true);
    try {
      const response = await axios.get<GeolocationMapBox>(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${data.address}.json`,
        {
          params: {
            proximity: '-73.990593,40.740121',
            access_token: env.MAPBOX_TOKEN,
            language: 'pt',
          },
        },
      );

      setLocations(response.data.features);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  async function onRegionChange(region: Region) {
    setCoordsLocation({
      latitude: region.latitude,
      longitude: region.longitude,
    });
  }

  async function handlePressCard(coords: ILocation) {
    setValue('address', '');
    setCoordsLocation(coords);
    setLocations([]);
    await changeLocation({address: coords.address});
  }

  const onSave = useCallback(async () => {
    if (coordsLocation) {
      await changeLocation(coordsLocation);
      await changeIsSavedLocation(true);
      navigate('Restaurants');
    } else {
      Alert.alert('Escolha seu endereço');
    }
  }, [coordsLocation, changeLocation, navigate]);

  return (
    <>
      <LocationTemplate
        addressInputProps={{
          control: control,
          label: translate(LanguagePaths.LOCATION_ADDRESS),
          name: 'address',
          placeholder: translate(LanguagePaths.LOCATION_ADDRESS),
          error: errors.address?.message,
        }}
        onSubmitSearch={handleSubmit(onSubmit)}
        title={translate(LanguagePaths.LOCATION_TITLE)}
        location={coordsLocation}
        addressesSearched={locations}
        onRegionChange={onRegionChange}
        onPressCard={handlePressCard}
        onSave={onSave}
      />

      {isLoading && <Loading />}
    </>
  );
});
