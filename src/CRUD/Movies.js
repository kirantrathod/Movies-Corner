import rawAxios from "axios";
const GET_ALL_DATA = "/discover/movie";
const GENER_LIST = "/genre/movie/list";
const SEARCH_MOVIES = "/search/movie";
const apiURL = "https://api.themoviedb.org/3";
const apiKey = "5116953109e4f06398477e12b6332ca8";
export function getAllMovies() {
  return rawAxios.get(
    `${apiURL}${GET_ALL_DATA}?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false`
  );
}
export function getGenerList() {
  const queryParams = `?api_key=${apiKey}&language=en-US`;
  return rawAxios.get(apiURL + GENER_LIST + queryParams);
}
