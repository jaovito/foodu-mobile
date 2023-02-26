import {render} from '@test-utils';
import {NutritionInfo} from '.';

describe('<NutritionCard /> tests', () => {
  it('should be defined', () => {
    const nutritionInfo = render(<NutritionInfo />);

    expect(nutritionInfo).toBeDefined();
  });

  it('should be able to match with snapshot', () => {
    const nutritionInfo = render(<NutritionInfo />).toJSON();

    expect(nutritionInfo).toMatchSnapshot();
  });
});
