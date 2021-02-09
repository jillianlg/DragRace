import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import QueenDetails from './QueenDetails';

describe('QueenDetails container', () => {
  it('displays a loading screen then a details of a queen by id', async() => {
    render(<QueenDetails />);

    screen.getByText('LOADING');

    const ul = await screen.findByTestId('queens');

    return waitFor(() => {
      expect(ul).not.toBeEmptyDOMElement();
    });
  });
});