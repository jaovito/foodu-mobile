import {fireEvent, render} from '@test-utils';
import {mock} from '@test/mocks';
import {SettingsTemplate} from './settings-template';

describe('<SettingsTemplate />', () => {
  const price = 20;

  it('should be defined', () => {
    const settingsTemplate = render(
      <SettingsTemplate
        options={mock.settingsTemplate.options}
        avatar={mock.settingsTemplate.avatar}
        wallet={price}
      />,
    );

    expect(settingsTemplate).toBeDefined();
  });

  it('should be able to find some menu option', async () => {
    const {findByText} = render(
      <SettingsTemplate
        options={mock.settingsTemplate.options}
        avatar={mock.settingsTemplate.avatar}
        wallet={price}
      />,
    );

    const option = await findByText(mock.settingsTemplate.options[0].name);

    expect(option).toBeTruthy();
  });

  it('should be able to click into a menu option', async () => {
    const {findByText} = render(
      <SettingsTemplate
        options={mock.settingsTemplate.options}
        avatar={mock.settingsTemplate.avatar}
        wallet={price}
      />,
    );

    const option = await findByText(mock.settingsTemplate.options[0].name);
    fireEvent.press(option);

    expect(mock.settingsTemplate.options[0].onPress).toHaveBeenCalled();
  });

  it('should be able to find the avatar email address', async () => {
    const {findByText} = render(
      <SettingsTemplate
        options={mock.settingsTemplate.options}
        avatar={mock.settingsTemplate.avatar}
        wallet={price}
      />,
    );

    const mockedEmail = mock.settingsTemplate.avatar.email as string;
    const email = findByText(mockedEmail);

    expect(email).toBeTruthy();
  });

  it('should be able to find the avatar name', async () => {
    const {findByText} = render(
      <SettingsTemplate
        options={mock.settingsTemplate.options}
        avatar={mock.settingsTemplate.avatar}
        wallet={price}
      />,
    );

    const mockedName = mock.settingsTemplate.avatar.name as string;
    const name = findByText(mockedName);

    expect(name).toBeTruthy();
  });

  it('should be able to match with snapshot', () => {
    const settingsTemplate = render(
      <SettingsTemplate
        options={mock.settingsTemplate.options}
        avatar={mock.settingsTemplate.avatar}
        wallet={price}
      />,
    ).toJSON();

    expect(settingsTemplate).toMatchSnapshot();
  });
});
