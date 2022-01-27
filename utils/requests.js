const API_KEY =  process.env.API_KEY;

export default {
    fetchTrending : {
        title:'Trending',
        url:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    },
    fetchTopRated : {
        title:'Top Rated',
        url : `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
    },
    fetchActionMovies: {
        title : 'Action',
        url : `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    },
    fetchComedyMovies: {
        title : 'Comedy',
        url : `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    },
    fetchHorrorMovies: {
        title : 'Horror',
        url : `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    },
    fetchRomanceMovies: {
        title : 'Romance',
        url : `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    },
    fetchMystery: {
        title : 'Mystery',
        url : `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    },
    fetchSciFi : {
        title : 'Sci Fi',
        url : `/discover/movie?api_key=${API_KEY}&with_genres=878`,
    },
    fetchWestern : {
        title : 'Western',
        url : `/discover/movie?api_key=${API_KEY}&with_genres=37`,
    },
    fetchAnimation: {
        title : 'Animation',
        url : `/discover/movie?api_key=${API_KEY}&with_genres=16`,
    },
    fetchTV: {
        title : '',
        url : `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
    },
};

/*https://api.themoviedb.org/3

 /discover/movie?api_key=${API_KEY}&with_genres=28

    &language=en-US

    &sort_by=popularity.desc
    &include_adult=false
    &include_video=false
    &page=1
    &with_watch_monetization_types=flatrate
    
API_KEY = 'f81980ff410e46f422d64ddf3a56dddd'

    https://api.themoviedb.org/3/3G1Q5xF40HkUBJXxt2DQgQzKTp5.jpg
*/