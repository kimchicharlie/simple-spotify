import Constants from 'expo-constants';
import ky from 'ky';

class MusicApi {
  constructor() {
    this.client = ky.extend({
      prefixUrl: Constants.manifest.extra.musicApi.baseUrl,
    });
  }

  async getPlaylists() {
    const data = await this.client('browse/featured-playlists').json();
    return data.playlists.items;
  }

  async getPlaylistById(playlistId) {
    const playlist = await this.client(`playlists/${playlistId}`).json();
    return playlist;
  }
}

export default MusicApi;
