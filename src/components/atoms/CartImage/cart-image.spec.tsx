import {render} from '@test-utils';
import {CartImage} from './cart-image';
import defaultImage from '../../../assets/pizza.png';

describe('<CartImage /> tests', () => {
  it('should be defined', () => {
    const image = render(<CartImage source={defaultImage} />);

    expect(image).toBeDefined();
  });

  it('should be able to match with snapshot', () => {
    const image = render(<CartImage source={defaultImage} />).toJSON();

    expect(image).toMatchSnapshot();
  });
});
