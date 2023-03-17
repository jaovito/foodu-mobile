import {OptionCardProps} from '@components/molecules/OptionCard/option-card.props';
import {FlatListProps} from 'react-native';

export interface OptionListProps {
  options: OptionCardProps[];
  listProps?: Partial<FlatListProps<OptionCardProps>>;
  style?: FlatListProps<OptionCardProps>['style'];
}
