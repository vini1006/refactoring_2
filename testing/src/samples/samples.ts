import Province from '../Province/Province';
import { doc } from '../types/types';

export const sampleProvinceData = (): doc => {
  return {
    name: 'Asia',
    demand: 30,
    price: 20,
    producers: [
      { name: 'Byzantium', cost: 10, production: 9 },
      { name: 'Attalia', cost: 12, production: 10 },
      { name: 'Sinope', cost: 10, production: 6 },
    ],
  };
};

export const createNoProducerData = (): doc => {
  return {
    name: 'No Producers',
    demand: 30,
    price: 20,
    producers: [],
  };
};
