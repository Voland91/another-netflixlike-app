export const fetchMovies = () => {
  const promise = fetch(
    'https://itunes.apple.com/us/rss/topmovies/limit=100/json',
  );

  return promise;
};