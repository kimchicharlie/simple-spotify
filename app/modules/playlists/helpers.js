export const hasImage = (playlist) =>
  Array.isArray(playlist.images) &&
  playlist.images.length > 0 &&
  playlist.images[0].url;

export const getPlaylistImageUrl = (playlist) =>
  hasImage(playlist) && playlist.images[0].url;

export const concatArtistsNames = (artists) =>
  artists.map((artist) => artist.name).join(', ');

export const removePlaylistsWithoutImages = (playlists) =>
  playlists.filter(hasImage);

export const formatPlaylistsForCard = (playlists) =>
  playlists.map((playlist) => ({
    imageUrl: playlist.images[0].url,
    id: playlist.id,
    key: playlist.id,
  }));
