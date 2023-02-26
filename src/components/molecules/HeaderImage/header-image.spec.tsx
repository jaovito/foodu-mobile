import {fireEvent, render, screen} from '@test-utils';
import {mock} from '@test/mocks';
import {HeaderImage} from '.';

describe('HeaderImage tests', () => {
  it('should be defined', () => {
    const headerImage = render(
      <HeaderImage address={mock.headerImage.address} />,
    );

    expect(headerImage).toBeDefined();
  });

  it('should be able to click into address button', async () => {
    render(<HeaderImage address={mock.headerImage.address} />);

    const button = await screen.findByText(mock.headerImage.address);
    fireEvent.press(button);

    expect(button).toBeTruthy();
  });

  it('should not be able to find the address', async () => {
    const {queryByText} = render(<HeaderImage />);

    const button = queryByText(mock.headerImage.address);

    expect(button).toBeFalsy();
  });

  it('should match with snapshot', async () => {
    const header = render(<HeaderImage />).toJSON();

    expect(header).toMatchSnapshot();
  });

  it('should match snapshot with an address', async () => {
    const header = render(
      <HeaderImage address={mock.headerImage.address} />,
    ).toJSON();

    expect(header).toMatchSnapshot();
  });
});
