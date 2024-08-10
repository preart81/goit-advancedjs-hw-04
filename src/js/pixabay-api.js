const API_KEY = '45270476-0e4dc869b670f41fd1cb8efc7';

export const fetchImages = queryText => {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: queryText,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    // safesearch: false,
    page: 1,
    per_page: 9,
  });

  return fetch(`https://pixabay.com/api/?${searchParams}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .catch(error => console.log(error));
};
