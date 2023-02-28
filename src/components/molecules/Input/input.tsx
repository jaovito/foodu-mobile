import React from 'react';

import {InputProps} from './input.props';
import {
  Container,
  Input as RNInput,
  Fieldset,
  Label,
  ErrorText,
  TextInputMask,
} from './input.styles';

export const Input = ({
  control,
  placeholder,
  label,
  name,
  error,
  mask,
  ...rest
}: InputProps) => {
  return (
    <Container
      control={control}
      name={name}
      rules={{
        required: true,
      }}
      render={({field: {onChange, onBlur, value}}) => (
        <Fieldset>
          <Label>{label}</Label>
          {!mask ? (
            <RNInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder={placeholder}
              {...rest}
            />
          ) : (
            <TextInputMask
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder={placeholder}
              type="cel-phone"
              options={mask}
              {...rest}
            />
          )}
          {error && <ErrorText>{error}</ErrorText>}
        </Fieldset>
      )}
    />
  );
};
