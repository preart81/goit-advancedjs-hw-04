import axios from 'axios';

const API_KEY = '45270476-0e4dc869b670f41fd1cb8efc7';

export const fetchImages = async (queryText, page = 1, per_page = 15) => {
  const response = await axios.get('https://pixabay.com/api/?', {
    params: {
      key: API_KEY,
      q: queryText,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      // safesearch: false,
      page: page,
      per_page: per_page,
    },
  });
  return response.data;
};
