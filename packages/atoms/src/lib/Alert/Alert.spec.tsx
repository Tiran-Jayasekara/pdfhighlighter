import { render } from '@testing-library/react';
import React from 'react';
import { Alert } from './alert';

describe('Alert', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert />);
    expect(baseElement).toBeTruthy();
  });
});
