export const getQueens = () => {
  return fetch('https://drag-race-api.readme.io/docs/get-all-queens')
    .then(res => res.json());
};
