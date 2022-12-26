import Producer from '../Producer/Producer';
import { doc } from '../types/types';

export default class Province {
  private _name: string;
  private _producers: Producer[];
  private _totalProduction: number;
  private _demand: number;
  private _price: number;
  private _demandCost: number;

  constructor(doc: doc) {
    const { name, demand, price, producers } = doc;
    this._name = name;
    this._demand = demand;
    this._price = price;
    this._producers = [];
    this._totalProduction = 0;
    this._demandCost = 0;

    producers.forEach((d) => this.addProducer(new Producer(this, d)));
  }

  addProducer(arg: Producer) {
    this._producers.push(arg);
    this._totalProduction += arg.production;
  }

  get name() {
    return this._name;
  }

  get producers() {
    return this._producers.slice();
  }

  get totalProduction() {
    return this._totalProduction;
  }

  set totalProduction(arg: number) {
    this._totalProduction = arg;
  }

  get demand() {
    return this._demand;
  }

  set demand(arg: number) {
    this._demand = arg;
  }

  get price() {
    return this._price;
  }

  set price(arg: number) {
    this._price = arg;
  }

  get shortfall() {
    return this._demand - this._totalProduction;
  }

  get profit() {
    return this.demandValue - this._demandCost;
  }

  get demandValue() {
    return this.satisfiedDemand * this.price;
  }

  get satisfiedDemand() {
    return Math.min(this._demand, this.totalProduction);
  }

  get demandCost() {
    let remainingDemand = this.demand;
    let result = 0;
    this.producers
      .sort((a, b) => a.cost - b.cost)
      .forEach((p) => {
        const contribution = Math.min(remainingDemand, p.production);
        remainingDemand -= contribution;
        result += contribution * p.cost;
      });

    return result;
  }
}
