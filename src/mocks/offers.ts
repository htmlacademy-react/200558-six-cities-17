import { TOffer, HousingRange,TOffersCities } from '../types/types';
const offers: TOffer[] = [
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
    title: 'Nice, cozy, warm big bed apartment',
    type: HousingRange.apartment,
    price: 180,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 8
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    isFavorite: false,
    isPremium: true,
    rating: 5,
    previewImage: 'https://url-to-image/image.png'
  },
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f01',
    title: 'Wood and stone place',
    type: HousingRange.apartment,
    price: 80,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3609553943508,
        longitude: 4.85309666406198,
        zoom: 8
      }
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    isFavorite: true,
    isPremium: false,
    rating: 4,
    previewImage: 'https://url-to-image/image.png'
  },
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f02',
    title: 'Wood and stone place',
    type: HousingRange.apartment,
    price: 80,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.929309666406198,
        zoom: 8
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 8
    },
    isFavorite: true,
    isPremium: false,
    rating: 4,
    previewImage: 'https://url-to-image/image.png'
  },
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f03',
    title: 'Wood and stone place',
    type: HousingRange.apartment,
    price: 80,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3809553943508,
        longitude: 4.939309666406198,
        zoom: 8
      }
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8
    },
    isFavorite: true,
    isPremium: false,
    rating: 4,
    previewImage: 'https://url-to-image/image.png'
  },
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f04',
    title: 'White castle',
    type: HousingRange.apartment,
    price: 180,
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.9333,
        longitude: 6.95,
        zoom: 8
      }
    },
    location: {
      latitude: 50.9333,
      longitude: 6.95,
      zoom: 8
    },
    isFavorite: false,
    isPremium: false,
    rating: 4,
    previewImage: 'https://url-to-image/image.png'
  },
];

const offersCities:TOffersCities = {};

offers.forEach((el) => {
  const city = el.city;
  const cityName: string = city.name;
  if (offersCities[cityName] === undefined) {
    offersCities[cityName] = [];
  }
  offersCities[cityName].push({ ...el });
});

export { offers,offersCities };
