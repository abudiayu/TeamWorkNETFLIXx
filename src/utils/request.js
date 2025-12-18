// utils/request.js
const requests = {
  fetchTrending: `/trending/all/week`,
  fetchNetflixOriginals: `/discover/tv?with_networks=213`,
  fetchTopRated: `/movie/top_rated`,
  fetchActionMovies: `/discover/movie?with_genres=28`,
  fetchComedyMovies: `/discover/movie?with_genres=35`,
  fetchHorrorMovies: `/discover/movie?with_genres=27`,
  fetchRomanceMovies: `/discover/movie?with_genres=10749`,
  fetchDocumentaries: `/discover/movie?with_genres=99`,

  // Extra categories
  fetchAdventureMovies: `/discover/movie?with_genres=12`,
  fetchAnimationMovies: `/discover/movie?with_genres=16`,
  fetchCrimeMovies: `/discover/movie?with_genres=80`,
  fetchMysteryMovies: `/discover/movie?with_genres=9648`,
  fetchSciFiMovies: `/discover/movie?with_genres=878`,
  fetchFamilyMovies: `/discover/movie?with_genres=10751`,
  fetchWarMovies: `/discover/movie?with_genres=10752`,
  fetchMusicMovies: `/discover/movie?with_genres=10402`,
  fetchWesternMovies: `/discover/movie?with_genres=37`,
  fetchTVShowsPopular: `/tv/popular`,
  fetchTVShowsTopRated: `/tv/top_rated`,
};

export { requests };
