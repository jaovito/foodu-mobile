import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends {[key: string]: unknown}> = {[K in keyof T]: T[K]};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type BuyFoodInput = {
  delivery_time: Scalars['String'];
  food_id: Scalars['String'];
  quantity: Scalars['Int'];
  user_id: Scalars['String'];
};

export type CategoriesOnFoods = {
  __typename?: 'CategoriesOnFoods';
  category_id: Scalars['String'];
  food: Food;
  food_id: Scalars['String'];
};

export type CategoriesOnFoodsFd = {
  __typename?: 'CategoriesOnFoodsFD';
  category: Category;
  category_id: Scalars['String'];
  food_id: Scalars['String'];
};

export type CategoriesOnRestaurants = {
  __typename?: 'CategoriesOnRestaurants';
  category_id: Scalars['String'];
  restaurant: Restaurant;
  restaurant_id: Scalars['String'];
};

export type CategoriesOnRestaurantsRs = {
  __typename?: 'CategoriesOnRestaurantsRS';
  category: Category;
  category_id: Scalars['String'];
  restaurant_id: Scalars['String'];
};

export type Category = {
  __typename?: 'Category';
  created_at: Scalars['DateTime'];
  file?: Maybe<File>;
  file_id?: Maybe<Scalars['String']>;
  food_id?: Maybe<Scalars['String']>;
  foods?: Maybe<Array<CategoriesOnFoods>>;
  id: Scalars['String'];
  name: Scalars['String'];
  restaurant_id?: Maybe<Scalars['String']>;
  restaurants?: Maybe<Array<CategoriesOnRestaurants>>;
  updated_at: Scalars['DateTime'];
};

export type CreateCategoryInput = {
  name: Scalars['String'];
};

export type CreateFoodInput = {
  about: Scalars['String'];
  categories: Array<Scalars['String']>;
  energy: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Float'];
  restaurant_id: Scalars['String'];
  size?: InputMaybe<FoodSize>;
};

export type CreateRestaurantInput = {
  about?: InputMaybe<Scalars['String']>;
  address: Scalars['String'];
  city: Scalars['String'];
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
  max_distance?: Scalars['Float'];
  name: Scalars['String'];
  neighbourhood: Scalars['String'];
  uf: Scalars['String'];
};

export type CustomResponse = {
  __typename?: 'CustomResponse';
  message: Scalars['String'];
  status: Scalars['Float'];
};

export type File = {
  __typename?: 'File';
  file_key: Scalars['String'];
  file_url: Scalars['String'];
  id: Scalars['String'];
};

export type FindAllRestaurantsInput = {
  categories?: InputMaybe<Array<Scalars['String']>>;
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
};

export type FindFoodInput = {
  categories?: InputMaybe<Array<Scalars['String']>>;
  restaurant_id: Scalars['String'];
};

export type Food = {
  __typename?: 'Food';
  about?: Maybe<Scalars['String']>;
  categories_on_foods?: Maybe<Array<CategoriesOnFoodsFd>>;
  created_at: Scalars['DateTime'];
  energy: Scalars['String'];
  file?: Maybe<File>;
  file_id?: Maybe<Scalars['String']>;
  foods_on_users?: Maybe<Array<FoodsOnUsers>>;
  id: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Float'];
  restaurant?: Maybe<Restaurant>;
  restaurant_id?: Maybe<Scalars['String']>;
  size: FoodSize;
  updated_at: Scalars['DateTime'];
};

export enum FoodSize {
  Big = 'BIG',
  Medium = 'MEDIUM',
  Small = 'SMALL',
}

export type FoodsOnUsers = {
  __typename?: 'FoodsOnUsers';
  delivery_time: Scalars['DateTime'];
  food_id: Scalars['String'];
  quantity: Scalars['Int'];
  user: User;
  user_id: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  buyFood: FoodsOnUsers;
  createCategory: Category;
  createFood: Food;
  createRestaurant: Restaurant;
  removeCategory: Category;
  removeFood: CustomResponse;
  removeRestaurant: CustomResponse;
  updateCategory: Category;
  updateFood: Food;
  updateRestaurant: Restaurant;
};

export type MutationBuyFoodArgs = {
  buyFoodInput: BuyFoodInput;
};

export type MutationCreateCategoryArgs = {
  createCategoryInput: CreateCategoryInput;
};

export type MutationCreateFoodArgs = {
  createFoodInput: CreateFoodInput;
};

export type MutationCreateRestaurantArgs = {
  createRestaurantInput: CreateRestaurantInput;
};

export type MutationRemoveCategoryArgs = {
  id: Scalars['String'];
};

export type MutationRemoveFoodArgs = {
  id: Scalars['String'];
};

export type MutationRemoveRestaurantArgs = {
  id: Scalars['String'];
};

export type MutationUpdateCategoryArgs = {
  updateCategoryInput: UpdateCategoryInput;
};

export type MutationUpdateFoodArgs = {
  updateFoodInput: UpdateFoodInput;
};

export type MutationUpdateRestaurantArgs = {
  updateRestaurantInput: UpdateRestaurantInput;
};

export type Query = {
  __typename?: 'Query';
  categories: Array<Category>;
  category: Category;
  findAllUserFood: Array<Food>;
  food: Food;
  foods: Array<Food>;
  restaurant: Restaurant;
  restaurants: Array<Restaurant>;
};

export type QueryCategoryArgs = {
  id: Scalars['String'];
};

export type QueryFoodArgs = {
  id: Scalars['String'];
};

export type QueryFoodsArgs = {
  findFoodInput: FindFoodInput;
};

export type QueryRestaurantArgs = {
  id: Scalars['String'];
};

export type QueryRestaurantsArgs = {
  findAllRestaurantsInput: FindAllRestaurantsInput;
};

export type Restaurant = {
  __typename?: 'Restaurant';
  about?: Maybe<Scalars['String']>;
  address: Scalars['String'];
  categories_on_restaurants?: Maybe<Array<CategoriesOnRestaurantsRs>>;
  city: Scalars['String'];
  created_at: Scalars['DateTime'];
  file?: Maybe<File>;
  file_id?: Maybe<Scalars['String']>;
  foods: Array<Food>;
  id: Scalars['String'];
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  max_distance: Scalars['Float'];
  name: Scalars['String'];
  neighbourhood: Scalars['String'];
  uf: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type UpdateCategoryInput = {
  id: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateFoodInput = {
  about?: InputMaybe<Scalars['String']>;
  categories?: InputMaybe<Array<Scalars['String']>>;
  energy?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  restaurant_id?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<FoodSize>;
};

export type UpdateRestaurantInput = {
  about?: InputMaybe<Scalars['String']>;
  address?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
  max_distance?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  neighbourhood?: InputMaybe<Scalars['String']>;
  uf?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  cel: Scalars['String'];
  created_at: Scalars['DateTime'];
  doccument: Scalars['String'];
  email: Scalars['String'];
  file_id?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  name: Scalars['String'];
  password: Scalars['String'];
  updated_at: Scalars['DateTime'];
  value: Scalars['Float'];
};

export type FindAllFoodsQueryVariables = Exact<{
  findFoodInput: FindFoodInput;
}>;

export type FindAllFoodsQuery = {
  __typename?: 'Query';
  foods: Array<{
    __typename?: 'Food';
    id: string;
    name: string;
    about?: string | null;
    size: FoodSize;
    energy: string;
    price: number;
    created_at: any;
    updated_at: any;
    file?: {__typename?: 'File'; file_url: string} | null;
    restaurant?: {
      __typename?: 'Restaurant';
      id: string;
      name: string;
      about?: string | null;
      address: string;
      city: string;
      uf: string;
      created_at: any;
      neighbourhood: string;
      file?: {__typename?: 'File'; file_url: string} | null;
    } | null;
    categories?: Array<{
      __typename?: 'CategoriesOnFoodsFD';
      category: {__typename?: 'Category'; name: string};
    }> | null;
  }>;
};

export type FindAllRestaurantsQueryVariables = Exact<{
  findAllRestaurantsInput: FindAllRestaurantsInput;
}>;

export type FindAllRestaurantsQuery = {
  __typename?: 'Query';
  restaurants: Array<{
    __typename?: 'Restaurant';
    id: string;
    name: string;
    about?: string | null;
    longitude?: number | null;
    latitude?: number | null;
    address: string;
    city: string;
    uf: string;
    max_distance: number;
    neighbourhood: string;
    created_at: any;
    updated_at: any;
    foods: Array<{__typename?: 'Food'; name: string}>;
    file?: {__typename?: 'File'; file_url: string} | null;
    categories?: Array<{
      __typename?: 'CategoriesOnRestaurantsRS';
      category: {__typename?: 'Category'; name: string};
    }> | null;
  }>;
};

export type FindOneFoodQueryVariables = Exact<{
  id: Scalars['String'];
}>;

export type FindOneFoodQuery = {
  __typename?: 'Query';
  food: {
    __typename?: 'Food';
    id: string;
    name: string;
    about?: string | null;
    size: FoodSize;
    energy: string;
    price: number;
    created_at: any;
    updated_at: any;
    file?: {__typename?: 'File'; file_url: string} | null;
    restaurant?: {
      __typename?: 'Restaurant';
      id: string;
      name: string;
      about?: string | null;
      address: string;
      city: string;
      uf: string;
      created_at: any;
      neighbourhood: string;
      file?: {__typename?: 'File'; file_url: string} | null;
    } | null;
    categories?: Array<{
      __typename?: 'CategoriesOnFoodsFD';
      category: {__typename?: 'Category'; name: string};
    }> | null;
  };
};

export const FindAllFoodsDocument = gql`
  query FindAllFoods($findFoodInput: FindFoodInput!) {
    foods(findFoodInput: $findFoodInput) {
      id
      name
      about
      size
      energy
      price
      file {
        file_url
      }
      restaurant {
        id
        name
        about
        address
        city
        uf
        created_at
        neighbourhood
        file {
          file_url
        }
      }
      categories: categories_on_foods {
        category {
          name
        }
      }
      created_at
      updated_at
    }
  }
`;

export function useFindAllFoodsQuery(
  options: Omit<Urql.UseQueryArgs<FindAllFoodsQueryVariables>, 'query'>,
) {
  return Urql.useQuery<FindAllFoodsQuery, FindAllFoodsQueryVariables>({
    query: FindAllFoodsDocument,
    ...options,
  });
}
export const FindAllRestaurantsDocument = gql`
  query FindAllRestaurants($findAllRestaurantsInput: FindAllRestaurantsInput!) {
    restaurants(findAllRestaurantsInput: $findAllRestaurantsInput) {
      id
      name
      about
      longitude
      latitude
      address
      city
      uf
      max_distance
      foods {
        name
      }
      neighbourhood
      file {
        file_url
      }
      categories: categories_on_restaurants {
        category {
          name
        }
      }
      created_at
      updated_at
    }
  }
`;

export function useFindAllRestaurantsQuery(
  options: Omit<Urql.UseQueryArgs<FindAllRestaurantsQueryVariables>, 'query'>,
) {
  return Urql.useQuery<
    FindAllRestaurantsQuery,
    FindAllRestaurantsQueryVariables
  >({query: FindAllRestaurantsDocument, ...options});
}
export const FindOneFoodDocument = gql`
  query FindOneFood($id: String!) {
    food(id: $id) {
      id
      name
      about
      size
      energy
      price
      file {
        file_url
      }
      restaurant {
        id
        name
        about
        address
        city
        uf
        created_at
        neighbourhood
        file {
          file_url
        }
      }
      categories: categories_on_foods {
        category {
          name
        }
      }
      created_at
      updated_at
    }
  }
`;

export function useFindOneFoodQuery(
  options: Omit<Urql.UseQueryArgs<FindOneFoodQueryVariables>, 'query'>,
) {
  return Urql.useQuery<FindOneFoodQuery, FindOneFoodQueryVariables>({
    query: FindOneFoodDocument,
    ...options,
  });
}
