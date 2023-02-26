import {PrimaryButton} from '@components/atoms/PrimaryButton';
import React from 'react';
import {CounterProps} from './counter.props';
import {Container, CounterText} from './counter.styles';

export const Counter = ({counter, onDecrement, onIncrement}: CounterProps) => {
  return (
    <Container>
      <PrimaryButton
        testID="DecrementButtonID"
        iconName="minus"
        onPress={onDecrement}
      />

      <CounterText>{counter}</CounterText>

      <PrimaryButton
        testID="IncrementButtonID"
        iconName="plus"
        onPress={onIncrement}
      />
    </Container>
  );
};
