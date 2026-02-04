export const capitalize = (str) => `${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`;

export function getMedia(str) {
  if (str.indexOf(' ') === -1) {
    return str.toLowerCase();
  }
  const sg = str.split(' ');
  return `${sg[0].toLowerCase()}${capitalize(sg[1])}`;
}

export const getApiUrl = ({ media, query }) => 
  `https://itunes.apple.com/search?media=${getMedia(media || 'all')}&term=${query.split(' ').join('+')}`;
