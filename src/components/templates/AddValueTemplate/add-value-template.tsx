import {Form} from '@components/organisms/Form';
import {useNavigate} from '@hooks/useNavigate';
import React from 'react';
import {AddValueTemplateProps} from './add-value-template.props';
import {Container, GoBack} from './add-value-template.styles';

export const AddValueTemplate = ({inputs, onSubmit}: AddValueTemplateProps) => {
  const {goBack} = useNavigate();

  return (
    <Container>
      <GoBack onPress={goBack} iconName="chevron-left" />

      <Form
        inputs={inputs}
        onSubmit={onSubmit}
        title="Add value"
        buttonText="Adicionar valor"
      />
    </Container>
  );
};
