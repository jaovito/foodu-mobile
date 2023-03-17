import {OptionCard} from '@components/molecules/OptionCard';
import React from 'react';
import {OptionListProps} from './option-list.props';
import {Container, Separator} from './option-list.styles';

export const OptionList = ({options, ...rest}: OptionListProps) => {
  return (
    <Container
      data={options}
      renderItem={({item}) => <OptionCard {...item} />}
      keyExtractor={item => item.name}
      style={rest.style}
      ItemSeparatorComponent={() => <Separator />}
      {...rest.listProps}
    />
  );
};
