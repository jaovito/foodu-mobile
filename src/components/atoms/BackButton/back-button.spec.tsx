import {render, fireEvent} from '@test-utils';
import {BackButton} from '.';

describe('BackButton Tests', () => {
  it('should render correctly', () => {
    const button = render(<BackButton />);

    expect(button).toBeDefined();
  });

  it('should be able to called on press', () => {
    const onPress = jest.fn();
    const button = render(<BackButton onPress={onPress} />);

    fireEvent.press(button.getByTestId('BackButtonID'));

    expect(onPress).toBeCalledTimes(1);
  });

  it('should be able to match with snapshot without onPress', () => {
    const button = render(<BackButton />).toJSON();

    expect(button).toMatchSnapshot();
  });

  it('should be able to match with snapshot with onPress', () => {
    const onPress = jest.fn();

    const button = render(<BackButton onPress={onPress} />).toJSON();

    expect(button).toMatchSnapshot();
  });
});
