import { TypeOfferPage } from '../types/offer';

export const NearPlaces: TypeOfferPage[] = [
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
    title: 'Beautiful & luxurious apartment at great location in Amsterdam',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.81309666406164,
        zoom: 10
      }
    },
    isFavorite: false,
    isPremium: false,
    rating: 4,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 3,
    goods: [
      'Heating',
      'Wi-Fi',
      'Kitchen',
      'Fridge',
      'Washing machine',
      'Coffee machine',
      'Dishwasher',
      'Towels',
      'Baby seat',
      'Cabel TV'
    ],
    host: {
      id: 10,
      name: 'Angelina Conner',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: true
    },
    images: [
      'img/room.jpg',
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/studio-01.jpg',
    ],
    maxAdults: 4
  },
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f01',
    title: 'Luxurious studio at great location',
    type: 'studio',
    price: 80,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3609553943508,
        longitude: 4.85309666406198,
        zoom: 10
      }
    },
    isFavorite: true,
    isPremium: false,
    rating: 3,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Paris.',
    bedrooms: 1,
    goods: [
      'Heating',
      'Wi-Fi',
      'Kitchen',
      'Fridge',
      'Coffee machine',
      'Towels',
      'Cabel TV'
    ],
    host: {
      id: 12,
      name: 'Oliver Conner',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: false
    },
    images: [
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/studio-01.jpg',
    ],
    maxAdults: 2
  },
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f02',
    title: 'Cute private room for one person',
    type: 'private room',
    price: 40,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943518,
        longitude: 4.929309666406198,
        zoom: 10
      }
    },
    isFavorite: false,
    isPremium: false,
    rating: 2,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 1,
    goods: [
      'Heating',
      'Wi-Fi',
      'Towels',
    ],
    host: {
      id: 13,
      name: 'Oliver Conner',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: true
    },
    images: [
      'img/apartment-02.jpg',
      'img/room.jpg',
      'img/studio-01.jpg',
    ],
    maxAdults: 1
  }
];