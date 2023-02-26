import {render, fireEvent} from '@test-utils';
import {PrimaryButton} from '.';

describe('PrimaryButton Tests', () => {
  it('should render correctly', () => {
    const button = render(<PrimaryButton iconName="minus" />);

    expect(button).toBeDefined();
  });

  it('should be able to called on press', () => {
    const onPress = jest.fn();
    const button = render(<PrimaryButton iconName="minus" onPress={onPress} />);

    fireEvent.press(button.getByTestId('PrimaryButtonID'));

    expect(onPress).toBeCalled();
  });

  it('should be able to match with snapshot without onPress', () => {
    const button = render(<PrimaryButton iconName="minus" />).toJSON();

    expect(button).toMatchSnapshot();
  });

  it('should be able to match with snapshot with onPress', () => {
    const onPress = jest.fn();

    const button = render(
      <PrimaryButton iconName="minus" onPress={onPress} />,
    ).toJSON();

    expect(button).toMatchSnapshot();
  });
});
