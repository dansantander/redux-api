const apikey = '1f69237e';
/* const CATEGORIES = [
  'movie',
  'series',
  'episode'
] */
const url = `http://www.omdbapi.com/?apikey=${apikey}&s=Batman`;

const getData = async () => {
  const response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  if (response.status === 400) { throw new Error('Bad request.'); }
  return response.json();
}

export default getData;