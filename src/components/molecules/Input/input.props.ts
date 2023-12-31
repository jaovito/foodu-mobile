import {Control} from 'react-hook-form';
import {TextInputProps} from 'react-native';
import {
  TextInputMaskOptionProp,
  TextInputMaskTypeProp,
} from 'react-native-masked-text';

type Fields = any;

export interface InputProps extends TextInputProps {
  control: Control<Fields, any>;
  placeholder: string;
  label: string;
  name: string;
  error?: string;
  mask?: TextInputMaskOptionProp & {
    type?: TextInputMaskTypeProp;
  };
}

export interface InputStyleProps {
  error: boolean;
}
