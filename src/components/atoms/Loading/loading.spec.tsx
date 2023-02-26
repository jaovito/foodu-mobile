import {render} from '@test-utils';
import {Loading} from './loading';

describe('<Loading /> tests', () => {
  it('should be defined', () => {
    const loading = render(<Loading />);

    expect(loading).toBeDefined();
  });

  it('should match with snapshot', () => {
    const loading = render(<Loading />).toJSON();

    expect(loading).toMatchSnapshot();
  });
});
