import React, { useState, useEffect } from 'react';
import QueenList from '../components/app/Queens/QueenList';
import { getQueens } from '../services/dragraceApi';

const AllQueens = () => {
  const [loading, setLoading] = useState(true);
  const [queens, setQueens] = useState([]);

  useEffect(() => {
    getQueens().then((queens) => {
      setQueens(queens);
      setLoading(false);
    });
  }, []);

  if(loading) return <h1>LOADING</h1>;
  return <QueenList queens={queens} />;
};

export default AllQueens;
