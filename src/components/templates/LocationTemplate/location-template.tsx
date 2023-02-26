import React from 'react';

import {Container, List, Main, Title} from './location-template.styles';
import {SearchAddress} from '@components/molecules/SearchAddress';
import {LocationTemplateProps} from './location-template.props';
import {Map} from '@components/molecules/Map';
import {AddressCard} from '@components/molecules/AddressCard';
import {Button} from '@components/atoms/Button';
import {translate} from '@translations/index';
import {LanguagePaths} from '@translations/enumns/LanguagePaths';

export const LocationTemplate = ({
  addressInputProps,
  onSubmitSearch,
  title,
  location,
  addressesSearched,
  onRegionChange,
  onPressCard,
  onSave,
}: LocationTemplateProps) => {
  function renderInputRow() {
    return (
      <SearchAddress
        inputProps={addressInputProps}
        primaryButtonProps={{
          onPress: onSubmitSearch,
        }}
      />
    );
  }

  return (
    <Container>
      <Title testID="WhereAreYouFromID">{title}</Title>

      <Main>
        {renderInputRow()}

        {!!addressesSearched?.length && (
          <List
            data={addressesSearched}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <AddressCard
                address={item.place_name}
                postalCode={item.context[0]?.text}
                city={item.context[1]?.text}
                state={item.context[2]?.text}
                onPress={() =>
                  onPressCard({
                    latitude: item.center[1],
                    longitude: item.center[0],
                    address: item.place_name,
                  })
                }
              />
            )}
          />
        )}
        {!addressesSearched?.length &&
          location &&
          location?.longitude &&
          location?.latitude && (
            <Map
              location={{
                latitude: location.latitude,
                longitude: location.longitude,
              }}
              onRegionChange={onRegionChange}
            />
          )}

        <Button onPress={onSave}>
          {translate(LanguagePaths.LOCATION_SAVE)}
        </Button>
      </Main>
    </Container>
  );
};
