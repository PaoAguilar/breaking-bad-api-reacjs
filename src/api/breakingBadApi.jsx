import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;

export function getBreackingBadCharacters() {
  return axios.get(`${baseURL}characters`);
}
