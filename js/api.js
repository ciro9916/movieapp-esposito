const API_KEY="13f01dadfa92a79a657e9ec813784ec3"
const ACCESS_TOKEN="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxM2YwMWRhZGZhOTJhNzlhNjU3ZTllYzgxMzc4NGVjMyIsIm5iZiI6MTc3OTk1MzQ1Mi45MDYsInN1YiI6IjZhMTdlZjJjYjhiMmI2OTk3MDliNWQ2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9AyEFiNtvX7dK8Jt5m0JU-JEpeal8hKPUUYtzo0UCGE"
const BASE_URL = 'https://api.themoviedb.org/3';

async function fetchFromTMDB(endpoint) {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}?api_key=${API_KEY}&language=it-IT`);
    if (!response.ok) throw new Error('Errore nella risposta');
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Fetch fallita:', error);
    return [];
  }
}

