import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AllQueens from './AllQueens';

describe('AllQueens container', () => {
  it('displays a loading screen then a list of queens', async() => {
    render(
      <MemoryRouter>
        <AllQueens />
      </MemoryRouter>);

    screen.getByText('LOADING');

    const ul = await screen.findByTestId('queens');

    return waitFor(() => {
      expect(ul).not.toBeEmptyDOMElement();
    });
  });
});
