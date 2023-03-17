import {render} from '@test-utils';
import {Avatar} from './';
import defaultImage from '../../../assets/pizza.png';

describe('<Avatar /> tests', () => {
  it('should be defined', () => {
    const image = render(<Avatar source={defaultImage} />);

    expect(image).toBeDefined();
  });

  it('should be able to match with snapshot', () => {
    const image = render(<Avatar source={defaultImage} />).toJSON();

    expect(image).toMatchSnapshot();
  });
});
