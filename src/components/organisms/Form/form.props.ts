import {InputProps} from '@components/molecules/Input/input.props';
import {ViewProps} from 'react-native';

export interface FormProps extends ViewProps {
  /**
   * Defines the input properties
   */
  inputs: InputProps[];
  title: string;
  buttonText: string;
  onSubmit: () => void;
}
