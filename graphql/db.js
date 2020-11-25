import axios from "axios";
const BASE_URL = "https://yts.mx/api/v2/";
const API_URL = "https://yts.mx/api/v2/list_movies.json?";
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json`;
const MOVIE_DETAILS_URL = `${BASE_URL}movie_details.json`;

// export const getMovies =(limit, rating) =>{
//     let REQUEST_URL = API_URL;
//     if(limit >0){
//         REQUEST_URL += `limit=${limit}`
//     }
//     if(rating >0){
//         REQUEST_URL += `&minimum_rating=${rating}`
//     }
//     return fetch(`${REQUEST_URL}`)
//     .then(res => res.json())
//     .then(json => json.data.movies)
// }
export const getMovies = async (limit, rating) => {
  const {
    data: {
      data: { movies },
    },
  } = await axios(LIST_MOVIES_URL, {
    params: {
      limit,
      minimum_rating: rating,
    },
  });
  return movies;
};
export const getMovie = async (id) => {
  const {
    data: {
      data: { movie },
    },
  } = await axios(MOVIE_DETAILS_URL, {
    params: {
      movie_id: id,
    },
  });
  return movie;
};
