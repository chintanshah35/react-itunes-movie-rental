export const capitalize = (str) => `${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`;

export function getMedia(str) {
  if (str.indexOf(' ') === -1) {
    return str.toLowerCase();
  }
  const sg = str.split(' ');
  return `${sg[0].toLowerCase()}${capitalize(sg[1])}`;
}

// Map media types to entity types for better results
const mediaEntityMap = {
  'movie': 'movie',
  'music': 'song',
  'podcast': 'podcast',
  'audiobook': 'audiobook',
  'all': 'all'
};

export const getApiUrl = ({ media, query }) => {
  const mediaType = getMedia(media || 'music');
  const entity = mediaEntityMap[mediaType] || 'song';
  return `https://itunes.apple.com/search?term=${query.split(' ').join('+')}&entity=${entity}&limit=50`;
};
