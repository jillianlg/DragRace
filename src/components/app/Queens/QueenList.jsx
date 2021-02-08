import React from 'react';
import PropTypes from 'prop-types';
import Queen from './Queen';

const QueenList = ({ queens }) => {
  const queenElements = queens.map((queen) => (
    <li key={queen.name}>
      <Queen
        image_url={queen.image_url}
        name={queen.name}
      />
    </li>
  ));

  return <ul data-testid="queens">{queenElements}</ul>;
};

QueenList.propTypes = {
  queens: PropTypes.arrayOf(PropTypes.shape({
    image_url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired
};

export default QueenList;
