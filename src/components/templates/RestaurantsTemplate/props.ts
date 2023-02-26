import {FindAllRestaurantsQuery} from 'src/generated/graphql';

export interface RestaurantsTemplateProps {
  /**
   * This property is the list of the restaurants returning by the api
   */
  restaurants?: FindAllRestaurantsQuery['restaurants'];

  /**
   * The user address
   */
  address?: string;
}
