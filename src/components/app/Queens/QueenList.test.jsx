import React from 'react';
import { render, cleanup } from '@testing-library/react';
import QueenList from './QueenList';


describe('QueenList component', () => {
  afterEach(() => cleanup());
  it('renders QueenList', () => {
    const { asFragment } = render(
      <QueenList
        queens={[]}
      />);
    expect(asFragment()).toMatchSnapshot();
  });
});
