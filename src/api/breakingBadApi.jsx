import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;

export function getBreakingBadCharacters() {
  return axios.get(`${baseURL}/characters`);
}

export function getBreakingBadEpisodes() {
  return axios.get(`${baseURL}/episodes`);
}
