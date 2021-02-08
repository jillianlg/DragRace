import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import AllQueens from './AllQueens';

describe('AllQueens container', () => {
  it('displays a loading screen then a list of queens', () => {
    render(<AllQueens />);

    screen.getByText('LOADING');
  });
});
