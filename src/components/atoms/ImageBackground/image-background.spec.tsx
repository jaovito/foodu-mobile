import {render} from '@test-utils';
import {ImageBackground} from '.';
import {Text} from '../Text';

describe('ImageBackground Tests', () => {
  const text = 'John doe';

  it('should render correctly', () => {
    const backgroundImage = render(
      <ImageBackground>
        <Text>{text}</Text>
      </ImageBackground>,
    );

    expect(backgroundImage).toBeDefined();
  });

  it('should be able to find the text inside the background image', async () => {
    const {findByText} = render(
      <ImageBackground>
        <Text>{text}</Text>
      </ImageBackground>,
    );

    const findText = await findByText(text);

    expect(findText).toBeTruthy();
  });

  it('should be not able to find the text that doesn`t exists in the background image', async () => {
    const {queryByText} = render(
      <ImageBackground>
        <Text>{text}</Text>
      </ImageBackground>,
    );

    const findText = queryByText('Potato');

    expect(findText).toBeNull();
  });

  it('should match with snapshot', async () => {
    const backgroundImage = render(
      <ImageBackground>
        <Text>{text}</Text>
      </ImageBackground>,
    ).toJSON;

    expect(backgroundImage).toMatchSnapshot();
  });
});
