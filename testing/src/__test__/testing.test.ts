import { test, expect } from '@jest/globals';
import { testingFn } from './testing';

test('testing', () => {
  const num = -1;
  expect(num > 0).toEqual(true);
  expect(testingFn(num)).not.toBeNaN();
});
