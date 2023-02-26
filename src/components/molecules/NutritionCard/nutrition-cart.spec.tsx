import {render} from '@test-utils';
import {mock} from '../../../test/mocks';
import {NutritionCard} from '.';

describe('<NutritionCard /> tests', () => {
  it('should be defined', () => {
    const nutritionCard = render(
      <NutritionCard
        title={mock.nutritionCard.title}
        info={mock.nutritionCard.info}
      />,
    );

    expect(nutritionCard).toBeDefined();
  });

  it('should be able to find the title inside card', async () => {
    const {findByText} = render(
      <NutritionCard
        title={mock.nutritionCard.title}
        info={mock.nutritionCard.info}
      />,
    );

    const text = await findByText(mock.nutritionCard.title);

    expect(text).toBeTruthy();
  });

  it('should be able to find the info inside card', async () => {
    const {findByText} = render(
      <NutritionCard
        title={mock.nutritionCard.title}
        info={mock.nutritionCard.info}
      />,
    );

    const text = await findByText(mock.nutritionCard.info);

    expect(text).toBeTruthy();
  });

  it('should be able to match with the snapshot', () => {
    const nutritionCard = render(
      <NutritionCard
        title={mock.nutritionCard.title}
        info={mock.nutritionCard.info}
      />,
    ).toJSON();

    expect(nutritionCard).toMatchSnapshot();
  });
});
