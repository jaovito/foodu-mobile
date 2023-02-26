import {render, fireEvent} from '@test-utils';
import {mock} from '../../../test/mocks';
import {AddressCard} from './address-card';

describe('AddressCard tests', () => {
  it('should be defined', () => {
    const card = render(
      <AddressCard
        address={mock.addressCard.title}
        city={mock.addressCard.city}
        postalCode={mock.addressCard.postalCode}
        state={mock.addressCard.state}
      />,
    );

    expect(card).toBeDefined();
  });

  it('should be able to find the address text', async () => {
    const {findByText} = render(
      <AddressCard
        address={mock.addressCard.title}
        city={mock.addressCard.city}
        postalCode={mock.addressCard.postalCode}
        state={mock.addressCard.state}
      />,
    );

    const address = await findByText(mock.addressCard.title);

    expect(address).toBeTruthy();
  });

  it('should be able to press in the card', async () => {
    const onPress = jest.fn();
    const {findByText} = render(
      <AddressCard
        address={mock.addressCard.title}
        city={mock.addressCard.city}
        postalCode={mock.addressCard.postalCode}
        state={mock.addressCard.state}
        onPress={onPress}
      />,
    );

    const address = await findByText(mock.addressCard.title);
    fireEvent.press(address);

    expect(onPress).toHaveBeenCalled();
  });

  it('should match with snapshot without onPress', async () => {
    const card = render(
      <AddressCard
        address={mock.addressCard.title}
        city={mock.addressCard.city}
        postalCode={mock.addressCard.postalCode}
        state={mock.addressCard.state}
      />,
    ).toJSON();

    expect(card).toMatchSnapshot();
  });

  it('should match with snapshot with onPress', async () => {
    const onPress = jest.fn();
    const card = render(
      <AddressCard
        address={mock.addressCard.title}
        city={mock.addressCard.city}
        postalCode={mock.addressCard.postalCode}
        state={mock.addressCard.state}
        onPress={onPress}
      />,
    ).toJSON();

    expect(card).toMatchSnapshot();
  });
});
