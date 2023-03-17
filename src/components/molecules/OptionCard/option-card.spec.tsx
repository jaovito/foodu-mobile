import {mock} from '@test/mocks';
import {fireEvent, render} from '@test/utils/test-utils';
import {OptionCard} from './option-card';

describe('<OptionCard />', () => {
  it('should be defined', () => {
    const optionCard = render(
      <OptionCard name={mock.optionCard.name} icon={mock.optionCard.icon} />,
    );

    expect(optionCard).toBeDefined();
  });

  it('should be able to find the name of the option card', async () => {
    const {findByText} = render(
      <OptionCard name={mock.optionCard.name} icon={mock.optionCard.icon} />,
    );

    const text = await findByText(mock.optionCard.name);

    expect(text).toBeTruthy();
  });

  it('should be able to press the option button', async () => {
    const {findByText} = render(
      <OptionCard
        name={mock.optionCard.name}
        icon={mock.optionCard.icon}
        onPress={mock.optionCard.onPress}
      />,
    );

    const text = await findByText(mock.optionCard.name);
    fireEvent.press(text);

    expect(mock.optionCard.onPress).toHaveBeenCalled();
  });

  it('should match with snapshot', () => {
    const optionCard = render(
      <OptionCard name={mock.optionCard.name} icon={mock.optionCard.icon} />,
    ).toJSON();

    expect(optionCard).toMatchSnapshot();
  });
});
