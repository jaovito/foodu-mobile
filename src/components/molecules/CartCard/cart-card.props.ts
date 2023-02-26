export interface CartCardProps {
  image?: string;
  counter: number;
  name: string;
  description?: string | null;
  price: number;
  onDelete: () => void;
}
