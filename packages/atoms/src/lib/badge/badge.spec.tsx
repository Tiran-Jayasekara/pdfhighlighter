import { render } from '@testing-library/react';
import React from 'react';
import { Badge } from './badge';

describe('Badge', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Badge />);
    expect(baseElement).toBeTruthy();
  });
});
