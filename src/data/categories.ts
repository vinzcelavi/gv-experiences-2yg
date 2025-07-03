import {
  Plane,
  Hotel,
  Globe,
  Wifi,
  Map,
  Utensils,
  Camera,
  ShoppingBag,
} from 'lucide-react';

export interface Category {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
}

export const categories: Category[] = [
  {
    id: '1',
    name: 'Démarches & connectivité',
    icon: Wifi,
  },
  {
    id: '2',
    name: 'Transports',
    icon: Plane,
  },
  {
    id: '3',
    name: 'Se loger',
    icon: Hotel,
  },
  {
    id: '4',
    name: 'Sur place',
    icon: Map,
  },
  {
    id: '5',
    name: 'À manger',
    icon: Utensils,
  },
  {
    id: '6',
    name: 'À voir',
    icon: Camera,
  },
  {
    id: '7',
    name: 'Shopping',
    icon: ShoppingBag,
  },
  {
    id: '8',
    name: 'Explorer',
    icon: Globe,
  },
]; 