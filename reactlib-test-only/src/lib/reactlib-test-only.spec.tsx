import { render } from '@testing-library/react';

import ReactlibTestOnly from './reactlib-test-only';

describe('ReactlibTestOnly', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactlibTestOnly />);
    expect(baseElement).toBeTruthy();
  });
});
