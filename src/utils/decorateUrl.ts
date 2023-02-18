export const decorateUrl = (url?: string) => {
  if (!url) return;
  if (url.startsWith('https://')) return url;
  return `https://${url}`;
};
