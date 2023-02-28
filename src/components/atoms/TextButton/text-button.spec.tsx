import {fireEvent, render} from '@test/utils/test-utils';
import {TextButton} from './text-button';

describe('<TextButton />', () => {
  const title = 'Save';
  it('should be defined', () => {
    const button = render(<TextButton>{title}</TextButton>);

    expect(button).toBeDefined();
  });

  it('should be able to find the text inside the button', async () => {
    const {findByText} = render(<TextButton>{title}</TextButton>);

    const text = await findByText(title);

    expect(text).toBeDefined();
    expect(text).toBeTruthy();
  });

  it('should be able to click on a text button', async () => {
    const onPress = jest.fn();
    const {findByText} = render(
      <TextButton onPress={onPress}>{title}</TextButton>,
    );

    const text = await findByText(title);
    fireEvent.press(text);

    expect(onPress).toHaveBeenCalled();
  });

  it('should be able to match with snapshot', async () => {
    const onPress = jest.fn();
    const button = render(
      <TextButton onPress={onPress}>{title}</TextButton>,
    ).toJSON();

    expect(button).toMatchSnapshot();
  });

  it('should be able to match with snapshot without onPress', async () => {
    const button = render(<TextButton>{title}</TextButton>).toJSON();

    expect(button).toMatchSnapshot();
  });
});
