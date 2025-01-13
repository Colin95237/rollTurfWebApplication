export interface CartItem {
  id?: number;
  squareMeter: number;
  turf: {
    name: string;
    id: number;
    pricePerSquareMeter: number;
  };
  order: {
    id: number;
  };
}
