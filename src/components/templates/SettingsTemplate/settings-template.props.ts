import {OptionListProps} from '@components/organisms/OptionList/option-list.props';
import {ViewProps} from 'react-native';

export interface SettingsTemplateProps extends ViewProps, OptionListProps {
  avatar: {
    name?: string;
    email?: string;
    url: string;
  };
  onSignOut?: () => void;
  wallet?: number;
}
