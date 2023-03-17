import {SettingsTemplateProps} from '@components/templates/SettingsTemplate/settings-template.props';
import {LanguagePaths} from '@translations/enumns/LanguagePaths';
import {translate} from '@translations/index';

export const settingsTemplate: SettingsTemplateProps = {
  avatar: {
    url: 'https://',
    email: 'john@example.com',
    name: 'John Doe',
  },
  options: [
    {
      name: translate(LanguagePaths.SETTINGS_LOCATION),
      icon: 'map-pin',
      onPress: jest.fn(),
    },
    {
      name: translate(LanguagePaths.SETTINGS_PROFILE),
      icon: 'user',
      onPress: jest.fn(),
    },
    {
      name: translate(LanguagePaths.SETTINGS_SETTINGS),
      icon: 'settings',
      onPress: jest.fn(),
    },
    {
      name: translate(LanguagePaths.SETTINGS_ADD_VALUE),
      icon: 'credit-card',
      onPress: jest.fn(),
    },
  ],
};
