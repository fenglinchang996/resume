export const decorateURL = (URL: string) => {
  if (URL.startsWith('https://')) return URL;
  return `https://${URL}`;
};
