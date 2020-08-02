import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';

import { getPlaylistImageUrl } from '../helpers';
import PlaylistImage from './PlaylistImage';
import PlaylistDescription from './PlaylistDescription';

const PlaylistInfos = ({ playlist }) => {
  const playlistImageUrl = getPlaylistImageUrl(playlist);
  return (
    <View style={styles.wrapper}>
      {playlistImageUrl && <PlaylistImage url={playlistImageUrl} />}
      <PlaylistDescription playlist={playlist} />
    </View>
  );
};

PlaylistInfos.propTypes = {
  playlist: PropTypes.shape({
    description: PropTypes.string,
    followers: PropTypes.shape({
      total: PropTypes.number,
    }),
    owner: PropTypes.shape({
      display_name: PropTypes.string,
    }),
    name: PropTypes.string,
  }).isRequired,
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    height: 120,
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
});

export default PlaylistInfos;
