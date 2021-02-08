import React from 'react';
import PropTypes from 'prop-types';

const QueenList = () => ();

QueenList.propTypes = {
  queens: propTypes.arrayOf(PropTypes.shape({
    image_url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired
};

export default QueenList;
