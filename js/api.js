const BASE_URL = 'https://api.themoviedb.org/3';
const BASE_URL_IMG= 'https://image.tmdb.org/t/p/w500';

async function fetchFromTMDB(endpoint) {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}?api_key=${API_KEY}&language=it-IT`);
    if (!response.ok) throw new Error('Errore nella risposta');
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Fetch fallita:', error);
    alert("Risorsa non trovata")
    return [];
  }
}

