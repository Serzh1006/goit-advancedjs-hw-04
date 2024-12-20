import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchByValue = (searchWord, page) => {
  return axios.get(
    `?key=36524518-a58dcdc8b7630db8edc13e4de&q=${searchWord}
        &per_page=15&page=${page}&image_type=photo&_orientation=horizontal&_safesearch=true`
  );
};
