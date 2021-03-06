import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Queen from './Queen';
import styles from './QueenList.css';

const QueenList = ({ queens }) => {
  const queenElements = queens.map((queen) => (
    <li key={queen.id}>
      <Link to={`/QueenDetails/${queen.id}`}>
        <Queen {...queen} />
      </Link>
    </li>
  ));

  return <div className={styles.QueenList}>
    <ul 
      data-testid="queens"> 
      {queenElements}
    </ul>
  </div>;
};

QueenList.propTypes = {
  queens: PropTypes.arrayOf(PropTypes.shape({
    image_url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired
};

export default QueenList;
