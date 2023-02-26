import {PrimaryButtonProps} from '@components/atoms/PrimaryButton';
import {InputProps} from '../Input';

export interface SearchAddressProps {
  inputProps: InputProps;
  primaryButtonProps?: Partial<PrimaryButtonProps>;
}
