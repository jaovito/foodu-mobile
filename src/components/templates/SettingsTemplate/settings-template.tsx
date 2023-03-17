import {LanguagePaths} from '@translations/enumns/LanguagePaths';
import {translate} from '@translations/index';
import {formatPrice} from '@utils/format-price';
import React from 'react';
import {SettingsTemplateProps} from './settings-template.props';
import {
  Container,
  Profile,
  OptionList,
  Button,
  Wallet,
  Value,
} from './settings-template.styles';

export const SettingsTemplate = ({
  options,
  onSignOut,
  avatar,
  wallet = 0,
}: SettingsTemplateProps) => {
  return (
    <Container>
      <Profile image={avatar.url} name={avatar.name} email={avatar.email} />

      <Wallet fontWeight="medium">
        {translate(LanguagePaths.SETTINGS_WALLET)}:{' '}
        <Value fontWeight="semiBold">{formatPrice(wallet)}</Value>
      </Wallet>
      <OptionList options={options} />

      <Button onPress={onSignOut}>Sair</Button>
    </Container>
  );
};
