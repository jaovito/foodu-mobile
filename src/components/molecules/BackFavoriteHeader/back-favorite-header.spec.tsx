import {render, fireEvent} from '@test-utils';
import {mock} from '../../../test/mocks';
import {BackFavoriteHeader} from '.';

describe('BackFavoriteHeader tests', () => {
  it('should be defined', () => {
    const header = render(
      <BackFavoriteHeader
        onFavorite={mock.foodHeader.onFavorite}
        onGoBack={mock.foodHeader.onGoBack}
      />,
    );

    expect(header).toBeDefined();
  });

  it('should be able to click on go back button', () => {
    const {getByTestId} = render(
      <BackFavoriteHeader
        onFavorite={mock.foodHeader.onFavorite}
        onGoBack={mock.foodHeader.onGoBack}
      />,
    );

    fireEvent.press(getByTestId('BackButtonID'));

    expect(mock.foodHeader.onGoBack).toBeCalled();
  });

  it('should be able to click on favorite button', () => {
    const {getByTestId} = render(
      <BackFavoriteHeader
        onFavorite={mock.foodHeader.onFavorite}
        onGoBack={mock.foodHeader.onGoBack}
      />,
    );

    fireEvent.press(getByTestId('FavoriteButtonID'));

    expect(mock.foodHeader.onFavorite).toBeCalled();
  });

  it('should match with snapshot', () => {
    const header = render(
      <BackFavoriteHeader
        onFavorite={mock.foodHeader.onFavorite}
        onGoBack={mock.foodHeader.onGoBack}
      />,
    ).toJSON();

    expect(header).toMatchSnapshot();
  });
});
