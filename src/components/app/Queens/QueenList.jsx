import React from 'react';
import PropTypes from 'prop-types';
import Queen from './Queen';
import { Link } from 'react-router-dom';

const QueenList = ({ queens }) => {
  const queenElements = queens.map((queen) => (
    <li key={queen.id}>
      <Link to={`/QueenDetails/${queen.id}`}>
        <Queen {...queen} />
      </Link>
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
