import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Queen from './Queen';


describe('Queen component', () => {
  afterEach(() => cleanup());
  it('renders Queen', () => {
    const { asFragment } = render(
      <Queen
        name="Bianca Del Rio"
        image_url="BDR.com"
      />);
    expect(asFragment()).toMatchSnapshot();
  });
});
