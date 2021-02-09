import React from 'react';
import PropTypes from 'prop-types';

const QueenData = ({ image_url, name, seasons:[season], quote }) => (
  <div data-testid="details">
    <p>{name}</p>
    <img style={{ height: '200px' }} src={image_url} alt={name} />
    <p>{season.id}</p>
    <p>{quote}</p>
  </div>
);

QueenData.propTypes = {
  name: PropTypes.string.isRequired,
  image_url: PropTypes.string.isRequired,
  seasons: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
};

export default QueenData;
