/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import QueenData from '../components/app/Queens/QueenData';
import { getOneQueen } from '../services/dragraceApi';

const QueenDetails = ({ match }) => {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState([]);

  useEffect(() => {
    getOneQueen(match.params.id).then((details) => {
      setDetails(details);
      setLoading(false);
    });
  }, []);

  if(loading) return <h1>LOADING</h1>;
  return <QueenData {...details} />;
};

QueenData.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  }).isRequired
};

export default QueenDetails;
