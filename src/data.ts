import { Business } from './types';

export const popularBusinesses: Business[] = [
  {
    id: '1',
    name: 'Eskihisar Kahvecisi',
    category: 'Cafe & Bakery',
    distance: '1.2 km',
    rating: 4.8,
    reviews: 342,
    isOpen: true,
    imageUrl: 'https://picsum.photos/seed/cafe1/800/600',
    description: 'A cozy cafe by the sea offering the best Turkish coffee and fresh pastries in Gebze.'
  },
  {
    id: '2',
    name: 'Gebze Center Mall',
    category: 'Shopping',
    distance: '2.5 km',
    rating: 4.5,
    reviews: 1205,
    isOpen: true,
    imageUrl: 'https://picsum.photos/seed/mall1/800/600',
    description: 'The premier shopping destination in Gebze with over 100 stores, cinema, and dining options.'
  },
  {
    id: '3',
    name: 'Osman Hamdi Bey Museum',
    category: 'Culture & Arts',
    distance: '1.8 km',
    rating: 4.9,
    reviews: 512,
    isOpen: false,
    imageUrl: 'https://picsum.photos/seed/museum1/800/600',
    description: 'Historical museum showcasing the life and works of the famous Ottoman painter and archaeologist.'
  },
  {
    id: '4',
    name: 'Tarihi Çoban Mustafa Paşa Külliyesi',
    category: 'Historical Site',
    distance: '0.5 km',
    rating: 4.7,
    reviews: 890,
    isOpen: true,
    imageUrl: 'https://picsum.photos/seed/mosque1/800/600',
    description: 'A beautiful 16th-century complex built by Mimar Sinan, featuring a mosque, mausoleum, and madrasa.'
  }
];
