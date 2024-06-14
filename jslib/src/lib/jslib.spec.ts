import { jslib } from './jslib';

// @ts-ignore
console.log('>>> MODE in test', import.meta.env.MODE);

describe('jslib', () => {
  it('should work', () => {
    expect(jslib()).toEqual('jslib');
  });
});
