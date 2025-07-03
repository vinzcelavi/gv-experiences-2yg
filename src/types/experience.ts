export interface Experience {
  id: string;
  title: string;
  image: string;
  rating: number;
  reviewCount: number;
  provider: string;
  startingPrice: number | null;
  description: string;
  location: string;
  type: 'Ticket' | 'Attraction';
}