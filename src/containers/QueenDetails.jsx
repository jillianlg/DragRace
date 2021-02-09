import React, { useState, useEffect } from 'react';
import QueenData from '../components/app/Queens/QueenData';

const QueenDetails = () => {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState([]);

  if(loading) return <h1>LOADING</h1>;
  return <QueenData details={details} />;
};

export default QueenDetails;
