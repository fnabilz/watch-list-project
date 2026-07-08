const BASE_URL = 'https://image.tmdb.org/t/p';

export function getBackgroundImage(path, size = 'w500') {
  if (!path) return null;
  return `url(${BASE_URL}/${size}${path})`;
}

export function getImageUrl(path, size = 'w500') {
  if (!path) return null;
  return `${BASE_URL}/${size}${path}`;
}
