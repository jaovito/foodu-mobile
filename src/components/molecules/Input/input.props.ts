import {Control} from 'react-hook-form';
import {TextInputProps} from 'react-native';

type Fields = any;

export interface InputProps extends TextInputProps {
  control: Control<Fields, any>;
  placeholder: string;
  label: string;
  name: string;
  error?: string;
}
