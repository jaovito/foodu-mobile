import {PrimaryButton} from '@components/atoms/PrimaryButton';
import {Form} from '@components/organisms/Form';
import React from 'react';
import {AddValueTemplateProps} from './add-value-template.props';
import {Container} from './add-value-template.styles';

export const AddValueTemplate = ({inputs, onSubmit}: AddValueTemplateProps) => {
  return (
    <Container>
      <PrimaryButton iconName="chevron-left" />

      <Form
        inputs={inputs}
        onSubmit={onSubmit}
        title="Add value"
        buttonText="Adicionar valor"
      />
    </Container>
  );
};
