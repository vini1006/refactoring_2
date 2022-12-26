export type producer = {
  name: string;
  cost: number;
  production: number;
};

export type doc = {
  name: string;
  demand: number;
  price: number;
  producers: producer[];
};
