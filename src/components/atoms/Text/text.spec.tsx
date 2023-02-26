import {render} from '@test-utils';
import {Text} from '.';

describe('Text Tests', () => {
  const textStr = 'John doe';

  it('should render correctly', () => {
    const text = render(<Text>{textStr}</Text>);

    expect(text).toBeDefined();
  });

  it('should be able to find the text string inside component', async () => {
    const {findByText} = render(<Text>{textStr}</Text>);

    const text = await findByText(textStr);

    expect(text).toBeTruthy();
  });

  it('should not be able to find the text string inside component', async () => {
    const {queryByText} = render(<Text>{textStr}</Text>);

    const text = queryByText('potato');

    expect(text).toBeNull();
  });

  it('should match with snapshot', () => {
    const text = render(<Text>{textStr}</Text>);

    expect(text).toMatchSnapshot();
  });
});
