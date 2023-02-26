import React from 'react';
import {Button} from '@components/atoms/Button';
import {Input} from '@components/molecules/Input';
import {FormProps} from './form.props';
import {Container, List, Title} from './form.styles';

export const Form = ({
  title,
  buttonText,
  onSubmit,
  inputs,
  ...rest
}: FormProps) => {
  return (
    <Container {...rest}>
      <Title>{title}</Title>

      <List
        data={inputs}
        keyExtractor={item => item.name}
        scrollEnabled={false}
        renderItem={({item}) => <Input {...item} />}
      />

      <Button onPress={onSubmit}>{buttonText}</Button>
    </Container>
  );
};
