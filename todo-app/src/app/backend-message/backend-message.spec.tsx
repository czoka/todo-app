import { render } from '@testing-library/react';

import BackendMessage from './backend-message';

describe('BackendMessage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BackendMessage />);
    expect(baseElement).toBeTruthy();
  });
});
