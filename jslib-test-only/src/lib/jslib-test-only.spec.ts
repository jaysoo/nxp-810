import { jslibTestOnly } from './jslib-test-only';

describe('jslibTestOnly', () => {
  it('should work', () => {
    expect(jslibTestOnly()).toEqual('jslib-test-only');
  });
});
