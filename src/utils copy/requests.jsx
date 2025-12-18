const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

// Fetch videos for a specific movie or show
export const fetchMovieVideos = (id) =>
  `/movie/${id}/videos?language=en-US`;

// Only Netflix Originals request for Banner
const requests = {
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
};

export default requests;

