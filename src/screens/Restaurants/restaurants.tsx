import {StatusBar} from 'expo-status-bar';
import {Loading} from '@components/atoms/Loading';
import {RestaurantsTemplate} from '@components/templates/RestaurantsTemplate';
import {useFindAllRestaurantsQuery} from '../../generated/graphql';

import {store} from '@store/index';
import {observer} from 'mobx-react';

export const Restaurants = observer(() => {
  const {
    location: {latitude, longitude, address},
  } = store;
  const [{data, fetching}] = useFindAllRestaurantsQuery({
    variables: {
      findAllRestaurantsInput: {
        latitude,
        longitude,
        categories: [],
      },
    },
    requestPolicy: 'network-only',
  });

  return (
    <>
      <RestaurantsTemplate address={address} restaurants={data?.restaurants} />

      <StatusBar style="light" />

      {fetching && <Loading />}
    </>
  );
});
