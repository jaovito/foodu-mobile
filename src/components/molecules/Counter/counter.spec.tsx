import {fireEvent, render} from '@test-utils';
import {Counter} from '.';

describe('Counter tests', () => {
  let counterNumber = 1;

  it('should be defined', () => {
    const counter = render(
      <Counter
        counter={counterNumber}
        onDecrement={() => counterNumber--}
        onIncrement={() => counterNumber++}
      />,
    );

    expect(counter).toBeDefined();
  });

  it('should be able to increment counter', () => {
    const {getByTestId} = render(
      <Counter
        counter={counterNumber}
        onDecrement={() => counterNumber--}
        onIncrement={() => counterNumber++}
      />,
    );

    fireEvent.press(getByTestId('IncrementButtonID'));

    expect(counterNumber).toBe(2);
  });

  it('should be able to decrement counter', () => {
    const {getByTestId} = render(
      <Counter
        counter={counterNumber}
        onDecrement={() => counterNumber--}
        onIncrement={() => counterNumber++}
      />,
    );

    fireEvent.press(getByTestId('DecrementButtonID'));

    expect(counterNumber).toBe(1);
  });

  it('should match with snapshot', () => {
    const counter = render(
      <Counter
        counter={counterNumber}
        onDecrement={() => counterNumber--}
        onIncrement={() => counterNumber++}
      />,
    ).toJSON();

    expect(counter).toMatchSnapshot();
  });
});
