import {render, fireEvent} from '@test-utils';
import {ArrowButton} from '.';

describe('ArrowButton Tests', () => {
  it('should render correctly', () => {
    const button = render(<ArrowButton />);

    expect(button).toBeDefined();
  });

  it('should be able to called on press', () => {
    const onPress = jest.fn();
    const button = render(<ArrowButton onPress={onPress} />);

    fireEvent.press(button.getByTestId('ArrowButtonID'));

    expect(onPress).toBeCalledTimes(1);
  });

  it('should be able to match with snapshot without onPress', () => {
    const button = render(<ArrowButton />).toJSON();

    expect(button).toMatchSnapshot();
  });

  it('should be able to match with snapshot with onPress', () => {
    const onPress = jest.fn();

    const button = render(<ArrowButton onPress={onPress} />).toJSON();

    expect(button).toMatchSnapshot();
  });
});
