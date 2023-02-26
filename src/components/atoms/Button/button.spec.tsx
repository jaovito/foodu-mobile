import {render, fireEvent} from '@test-utils';
import {Button} from '.';

describe('Button Tests', () => {
  const text = 'Hello world!';

  it('should render correctly', () => {
    const button = render(<Button>{text}</Button>);

    expect(button).toBeDefined();
  });

  it('should contains the existing text', async () => {
    const {findByText} = render(<Button>{text}</Button>);

    const button = await findByText(text);

    expect(button).toBeTruthy();
  });

  it('should be able to click on the button', async () => {
    const onPress = jest.fn();

    const {getByTestId} = render(<Button onPress={onPress}>{text}</Button>);

    fireEvent.press(getByTestId('ButtonTestID'));

    expect(onPress).toHaveBeenCalled();
  });

  it('should be able to click 2 times on the button', async () => {
    const onPress = jest.fn();

    const {getByTestId} = render(<Button onPress={onPress}>{text}</Button>);

    fireEvent.press(getByTestId('ButtonTestID'));
    fireEvent.press(getByTestId('ButtonTestID'));

    expect(onPress).toHaveBeenCalledTimes(2);
  });

  it('should match with snapshot (with on press)', async () => {
    const onPress = jest.fn();

    const button = render(<Button onPress={onPress}>{text}</Button>).toJSON();

    expect(button).toMatchSnapshot();
  });

  it('should match with snapshot (without onPress)', async () => {
    const button = render(<Button>{text}</Button>).toJSON();

    expect(button).toMatchSnapshot();
  });
});
