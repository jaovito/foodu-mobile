export interface AddressCardProps {
  address: string;
  postalCode?: string;
  city?: string;
  state?: string;
  onPress?: () => void;
}
