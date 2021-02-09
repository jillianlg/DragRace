import React from 'react';
import PropTypes from 'prop-types';
import styles from './QueenData.css';

const QueenData = ({ image_url, name, seasons:[season], quote }) => (
  <div data-testid="details">
    <section className={styles.QueenData}>
      <p>{name}</p>
      <img style={{ height: '200px' }} src={image_url} alt={name} />
      <p>Season:{season.id}</p>
      <p>{quote}</p>
    </section>
  </div>
);

QueenData.propTypes = {
  name: PropTypes.string.isRequired,
  image_url: PropTypes.string.isRequired,
  seasons: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
};

export default QueenData;
