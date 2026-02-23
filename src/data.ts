import { Business } from './types';

export const popularBusinesses: Business[] = [
  {
    id: '1',
    name: 'Eskihisar Kahvecisi',
    category: 'Kafe & Fırın',
    distance: '1.2 km',
    rating: 4.8,
    reviews: 342,
    isOpen: true,
    imageUrl: '',
    description: 'Deniz kenarında, Gebze\'nin en iyi Türk kahvesi ve taze hamur işlerini sunan rahat bir kafe.'
  },
  {
    id: '2',
    name: 'Gebze Center AVM',
    category: 'Alışveriş',
    distance: '2.5 km',
    rating: 4.5,
    reviews: 1205,
    isOpen: true,
    imageUrl: '',
    description: '100\'den fazla mağaza, sinema ve yemek seçenekleriyle Gebze\'nin önde gelen alışveriş merkezi.'
  },
  {
    id: '3',
    name: 'Osman Hamdi Bey Müzesi',
    category: 'Kültür & Sanat',
    distance: '1.8 km',
    rating: 4.9,
    reviews: 512,
    isOpen: false,
    imageUrl: '',
    description: 'Ünlü Osmanlı ressamı ve arkeoloğunun hayatını ve eserlerini sergileyen tarihi müze.'
  },
  {
    id: '4',
    name: 'Tarihi Çoban Mustafa Paşa Külliyesi',
    category: 'Tarihi Mekan',
    distance: '0.5 km',
    rating: 4.7,
    reviews: 890,
    isOpen: true,
    imageUrl: '',
    description: 'Mimar Sinan tarafından inşa edilen, cami, türbe ve medrese içeren güzel bir 16. yüzyıl külliyesi.'
  }
];
