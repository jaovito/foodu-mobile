import {AvatarProps} from '@components/atoms/Avatar/avatar.props';
import {TextProps} from '@components/atoms/Text';
import {ViewProps} from 'react-native';

export interface ProfileProps extends ViewProps {
  name?: string;
  email?: string;
  image: string;

  avatarProps?: Partial<AvatarProps>;
  nameProps?: Partial<TextProps>;
  emailProps?: Partial<TextProps>;
}
