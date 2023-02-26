import {FindAllRestaurantsQuery} from 'src/generated/graphql';

export interface RestaurantListProps {
  restaurants?: FindAllRestaurantsQuery['restaurants'];
}
