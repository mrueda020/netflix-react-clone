const API_KEY = "bd364fb3f44ccf45d4f8f867091bb292";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchCategories: `/genre/movie/list?api_key=${API_KEY}&language=en-US`,
  fetchCategorie: `/discover/movie?api_key=${API_KEY}&with_genres=`,
};

export default requests;
