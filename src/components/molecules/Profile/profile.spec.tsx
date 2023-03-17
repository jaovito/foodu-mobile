import {mock} from '@test/mocks';
import {render} from '@test/utils/test-utils';
import {Profile} from './';

describe('<Profile />', () => {
  it('should be defined', () => {
    const profile = render(
      <Profile
        image={mock.profile.image}
        name={mock.profile.name}
        email={mock.profile.email}
      />,
    );

    expect(profile).toBeDefined();
  });

  it('should be able to find the name of the profile', async () => {
    const {findByText} = render(
      <Profile
        image={mock.profile.image}
        name={mock.profile.name}
        email={mock.profile.email}
      />,
    );

    const name = await findByText(mock.profile.name);

    expect(name).toBeDefined();
    expect(name).toBeTruthy();
  });

  it('should be able to find the email of the profile', async () => {
    const {findByText} = render(
      <Profile
        image={mock.profile.image}
        name={mock.profile.name}
        email={mock.profile.email}
      />,
    );

    const email = await findByText(mock.profile.email);

    expect(email).toBeDefined();
    expect(email).toBeTruthy();
  });

  it('should not be able to find the name of the profile', () => {
    const {queryByText} = render(
      <Profile image={mock.profile.image} email={mock.profile.email} />,
    );

    const name = queryByText(mock.profile.name);

    expect(name).toBeFalsy();
  });

  it('should not be able to find the email of the profile', () => {
    const {queryByText} = render(
      <Profile image={mock.profile.image} name={mock.profile.name} />,
    );

    const email = queryByText(mock.profile.email);

    expect(email).toBeFalsy();
  });

  it('should be able to match with snapshot', () => {
    const profile = render(
      <Profile
        image={mock.profile.image}
        name={mock.profile.name}
        email={mock.profile.email}
      />,
    ).toJSON();

    expect(profile).toMatchSnapshot();
  });
});
