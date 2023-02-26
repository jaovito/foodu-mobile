import {fireEvent, render} from '@test-utils';
import {OnboardingChef} from '.';

describe('OnboardingChef Tests', () => {
  const title = 'Title';
  const description = 'Description';
  const onPress = jest.fn();

  it('should render correctly', () => {
    const onboarding = render(
      <OnboardingChef
        title={title}
        description={description}
        onPress={onPress}
      />,
    );

    expect(onboarding).toBeDefined();
  });

  it('should be able to find the title of the onboarding container', async () => {
    const {findByText} = render(
      <OnboardingChef
        title={title}
        description={description}
        onPress={onPress}
      />,
    );

    const text = await findByText(title);

    expect(text).toBeTruthy();
  });

  it('should be able to find the description of the onboarding container', async () => {
    const {findByText} = render(
      <OnboardingChef
        title={title}
        description={description}
        onPress={onPress}
      />,
    );

    const text = await findByText(description);

    expect(text).toBeTruthy();
  });

  it('should be able to call onPress function', () => {
    const onboarding = render(
      <OnboardingChef
        title={title}
        description={description}
        onPress={onPress}
      />,
    );

    fireEvent.press(onboarding.getByTestId('ArrowButtonID'));

    expect(onPress).toBeCalledTimes(1);
  });

  it('should match with snapshot', () => {
    const onboarding = render(
      <OnboardingChef
        title={title}
        description={description}
        onPress={onPress}
      />,
    ).toJSON();

    expect(onboarding).toMatchSnapshot();
  });
});
