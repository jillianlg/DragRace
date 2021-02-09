import { render, screen, waitFor } from '@testing-library/react';
import QueenDetails from './QueenDetails';

describe('AllQueens container', () => {
  it('displays a loading screen then a list of queens', async() => {
    render(<QueenDetails />);

    screen.getByText('LOADING');

    const ul = await screen.findByTestId('details');

    return waitFor(() => {
      expect(ul).not.toBeEmptyDOMElement();
    });
  });
});