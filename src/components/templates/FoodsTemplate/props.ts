import {FindAllFoodsQuery} from 'src/generated/graphql';

export interface FoodsTemplateProps {
  /**
   * This property is the list of the foods returning by the api
   */
  foods?: FindAllFoodsQuery['foods'];

  /**
   * This property is the onPress action on click in the card
   */
  onPress: (id: string) => void;

  /**
   * The user addres
   */
  address?: string;
}
