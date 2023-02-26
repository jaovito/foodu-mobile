import {render, fireEvent} from '@test-utils';
import {FavoriteButton} from '.';

describe('FavoriteButton Tests', () => {
  it('should render correctly', () => {
    const button = render(<FavoriteButton />);

    expect(button).toBeDefined();
  });

  it('should be able to called on press', () => {
    const onPress = jest.fn();
    const button = render(<FavoriteButton onPress={onPress} />);

    fireEvent.press(button.getByTestId('FavoriteButtonID'));

    expect(onPress).toBeCalledTimes(1);
  });

  it('should be able to match with snapshot without onPress', () => {
    const button = render(<FavoriteButton />).toJSON();

    expect(button).toMatchSnapshot();
  });

  it('should be able to match with snapshot with onPress', () => {
    const onPress = jest.fn();

    const button = render(<FavoriteButton onPress={onPress} />).toJSON();

    expect(button).toMatchSnapshot();
  });
});
