import { describe, beforeEach, it, expect } from '@jest/globals';

import Province from './Province';
import { sampleProvinceData, createNoProducerData } from '../samples/samples';

describe('Province', () => {
  let asia: Province;

  beforeEach(() => {
    asia = new Province(sampleProvinceData()); // 1 픽스처 설정;
  });

  it('get shortfall', () => {
    expect(asia.shortfall).toEqual(5);
  });

  it('get profit', () => {
    expect(asia.profit).toEqual(230);
  });

  it('set production', () => {
    asia.producers[0].production = 20;
    expect(asia.shortfall).toEqual(-6);
    expect(asia.profit).toEqual(292);
  });

  it('zero demand', () => {
    asia.demand = 0;
    expect(asia.shortfall).toEqual(-25);
    expect(asia.profit).toEqual(0);
  });

  it('negative demand', () => {
    //수요가 마이너스인게 맞을까??
    asia.demand = -1;
    expect(asia.shortfall).toEqual(-26);
    expect(asia.profit).toEqual(-10);
  });

  it('NAN demand', () => {
    asia.demand = NaN;
    expect(asia.shortfall).toBeNaN();
    expect(asia.profit).toBeNaN();
  });
});

describe('No Producers', () => {
  let noProducers: Province;
  beforeEach(() => {
    noProducers = new Province(createNoProducerData());
  });

  it('get shortfall', () => {
    expect(noProducers.shortfall).toEqual(30);
  });

  it('get profit', () => {
    expect(noProducers.profit).toEqual(0);
  });
});

//생산자 수 필드에 문자열을 대입한다.
describe('String for producers', () => {
  //TODO: Typescript 인 경우에는 어떻게 테스트하면 좋을까요?
  it('', () => {
    const data = {
      name: 'String producers',
      producers: [], //여기를 ""로 테스트해야함 typescript는 안됨
      demand: 30,
      price: 20,
    };

    const prov = new Province(data);
    expect(prov.shortfall).toEqual(0);
  });
});
