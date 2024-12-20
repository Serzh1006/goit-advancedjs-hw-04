export const fetchByValue = searchWord => {
  try {
    return fetch(
      `https://pixabay.com/api/?key=36524518-a58dcdc8b7630db8edc13e4de&q=${searchWord}&image_type=photo&orientation=horizontal&safesearch=true`
    ).then(res => {
      if (!res.ok) {
        throw new Error(res.status);
      }
      return res.json();
    });
  } catch (error) {
    console.log(error, '500: Server error!');
  }
};
