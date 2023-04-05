import {InputProps} from '@components/molecules/Input';
import {AddValueTemplate} from '@components/templates/AddValueTemplate';
import {LanguagePaths} from '@translations/enumns/LanguagePaths';
import {translate} from '@translations/index';
import React from 'react';
import {useForm} from 'react-hook-form';
import {IFormValues} from './add-value.props';

export const AddValue = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<IFormValues>({});

  const inputs: InputProps[] = [
    {
      label: 'Valor',
      placeholder: 'Digite um valor para adicionar na sua carteira...',
      name: 'value',
      control,
      keyboardType: 'numeric',
      error: errors.value?.message,
      mask: {
        type: 'money',
        precision: 2,
        separator:
          translate(LanguagePaths.GENERAL_LANGUAGE) === 'pt-BR' ? ',' : '.',
        delimiter:
          translate(LanguagePaths.GENERAL_LANGUAGE) === 'pt-BR' ? '.' : ',',
        unit:
          translate(LanguagePaths.GENERAL_LANGUAGE) === 'pt-BR' ? 'R$ ' : '$ ',
        suffixUnit: '',
      },
    },
  ];

  const onSubmit = (data: IFormValues) => {
    if (translate(LanguagePaths.GENERAL_LANGUAGE) === 'pt-BR') {
      const valueWithoutCurrency = data.value.replace('R$ ', ''); // remove o R$
      const parsedValue = valueWithoutCurrency.replace(',', '.'); // substitui a vírgula por um ponto
      const floatValue = parseFloat(parsedValue); // converte para número

      return console.log(floatValue); // exibe o número 100.09 no console
    }

    const parsedValue = data.value.replace('$ ', ''); // remove o R$
    const floatValue = parseFloat(parsedValue); // converte para número

    return console.log(floatValue); // exibe o número 100.09 no console
  };

  return <AddValueTemplate inputs={inputs} onSubmit={handleSubmit(onSubmit)} />;
};
