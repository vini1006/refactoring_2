import Province from '../Province/Province';
import { producer } from '../types/types';

export default class Producer {
  private _province: Province;
  private _cost: number;
  private _production: number;
  private _name: string;

  constructor(aProvince: Province, data: producer) {
    const { cost, name, production = 0 } = data;
    this._province = aProvince;
    this._cost = cost;
    this._name = name;
    this._production = production;
  }

  get name() {
    return this._name;
  }

  get cost() {
    return this._cost;
  }

  set cost(arg: number) {
    this._cost = arg;
  }

  get production(): number {
    return this._production;
  }

  set production(amountNumber: number) {
    const amount = parseInt(`${amountNumber}`);
    const newProduction = Number.isNaN(amount) ? 0 : amount;
    this._province.totalProduction += newProduction - this._production;
    this._production = newProduction;
  }
}
