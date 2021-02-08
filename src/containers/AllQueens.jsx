import React, { useState } from 'react';
import QueenList from '../components/app/Queens/QueenList';

const AllQueens = () => {
  const [loading, setLoading] = useState(true);
  const [queens, setQueens] = useState([]);

  useEffects(() => {
    
  })

  if(loading) return <h1>LOADING</h1>;
  return <QueenList queens={queens} />;
};

export default AllQueens;
