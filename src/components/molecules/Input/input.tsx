import React from 'react';
import {InputProps} from './input.props';
import {
  Container,
  Input as RNInput,
  Fieldset,
  Label,
  ErrorText,
} from './input.styles';

export const Input = ({
  control,
  placeholder,
  label,
  name,
  error,
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
          <RNInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder={placeholder}
            {...rest}
          />
          {error && <ErrorText>{error}</ErrorText>}
        </Fieldset>
      )}
    />
  );
};
