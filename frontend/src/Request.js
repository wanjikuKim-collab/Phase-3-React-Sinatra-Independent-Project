const API_KEY = "30d37017426bc7f99dc52b6e58ee8d63";

// contains the endpoints 
const requests ={
    fetchTrending: `/trending/all/day?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchAction: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedy: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorror: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomance: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchLatestMovies: `/movie/latest?api_key=${API_KEY}&language=en-US`,
    fetchNowPlaying:`/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
    fetchPopularMovies:`/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    fetchUpcomingMovies:`/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
    fetchLatestTvShows: `/tv/latest?api_key=${API_KEY}&language=en-US`,
    fetchTopTvRated: `/tv/top_rated?api_key=${API_KEY}&language=en-US`
    
}

export default requests;