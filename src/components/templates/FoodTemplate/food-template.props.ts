export interface FoodInfoProps {
  name: string;
  price: number;
  counter: number;

  size: string;
  delivery: string;
  energy: string;

  onIncrement: () => void;
  onDecrement: () => void;

  onAddToCart: () => void;
}
