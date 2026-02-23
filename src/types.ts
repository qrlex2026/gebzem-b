export interface Business {
  id: string;
  name: string;
  category: string;
  distance: string;
  rating: number;
  reviews: number;
  isOpen: boolean;
  imageUrl: string;
  description?: string;
}
