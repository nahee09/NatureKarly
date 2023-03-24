export const getPathFromBaseUrl = (path = '') =>
  `${import.meta.env.BASE_URL}${path}`;
