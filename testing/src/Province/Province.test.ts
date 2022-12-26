import Province from './Province';
import { sampleProvinceData } from '../samples/samples';

describe('Province', () => {
  it('get shortfall', () => {
    const asia = new Province(sampleProvinceData()); // 1 픽스처 설정
    expect(asia.shortfall).toEqual(5); //2 검증
  });
});