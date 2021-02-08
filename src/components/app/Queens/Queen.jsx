import React from 'react';
import PropTypes from 'prop-types';

const Queen = ({ image_url, name }) => (
  <div>
    <img style={{ width: '200px' }} src={image_url} alt={name} />
    <p>{name}</p>
  </div>
);

Queen.propTypes = {
  image_url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Queen;
