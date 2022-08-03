export const decorateURL = (URL?: string) => {
  if (!URL) return;
  if (URL.startsWith('https://')) return URL;
  return `https://${URL}`;
};
