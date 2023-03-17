import {RectButtonProps} from 'react-native-gesture-handler';
import {IconProps} from 'react-native-vector-icons/Icon';

export interface OptionCardProps extends RectButtonProps {
  name: string;
  icon: string;

  arrowRightProps?: Partial<IconProps>;
}
