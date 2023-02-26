import {TouchableOpacityProps} from 'react-native';
import {IconProps} from 'react-native-vector-icons/Icon';

export interface ArrowButtonProps extends TouchableOpacityProps {
  iconProps?: Partial<IconProps>;
}
