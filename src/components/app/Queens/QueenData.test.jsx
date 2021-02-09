import React from 'react';
import { render, cleanup } from '@testing-library/react';
import QueenData from './QueenData';



describe('QueenData component', () => {
  afterEach(() => cleanup());
  it('renders Queen data by id', () => {
    const { asFragment } = render(
      <QueenData
        name="Bianca Del Rio"
        image_url="BDR.com"
        seasons="6"
        quote="Not today Satan."
      />);
    expect(asFragment()).toMatchSnapshot();
  });
});
