import {OptionCardProps} from '@components/molecules/OptionCard/option-card.props';
import {SettingsTemplate} from '@components/templates/SettingsTemplate/settings-template';
import {useNavigate} from '@hooks/useNavigate';
import {store} from '@store/index';
import {LanguagePaths} from '@translations/enumns/LanguagePaths';
import {translate} from '@translations/index';
import React from 'react';
import {Container} from './settings.styles';

export const Settings = () => {
  const {signOut, user} = store;
  const {navigate} = useNavigate();

  const options: OptionCardProps[] = [
    {
      name: translate(LanguagePaths.SETTINGS_LOCATION),
      icon: 'map-pin',
      onPress: () => navigate('Location'),
    },
    {name: translate(LanguagePaths.SETTINGS_PROFILE), icon: 'user'},
    {name: translate(LanguagePaths.SETTINGS_SETTINGS), icon: 'settings'},
    {
      name: translate(LanguagePaths.SETTINGS_ADD_VALUE),
      icon: 'credit-card',
      onPress: () => navigate('AddValue'),
    },
  ];

  return (
    <Container>
      <SettingsTemplate
        options={options}
        avatar={{
          name: user?.name,
          email: user?.email,
          url: 'http://github.com/jaovito.png',
        }}
        onSignOut={signOut}
      />
    </Container>
  );
};
