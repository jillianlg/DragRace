export const getQueens = () => {
  return fetch('https://www.nokeynoshade.party/api/queens/all')
    .then(res => res.json());
};

export const getOneQueen = (id) => {
  return fetch(`https://www.nokeynoshade.party/api/queens/${id}`)
    .then(res => res.json());
};
