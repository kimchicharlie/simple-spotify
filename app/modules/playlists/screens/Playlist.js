import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, View } from 'react-native';

import { fetchPlaylist } from '..';
import { playTrack } from '../../trackPlayer';
import MainLayout from '../../common/components/MainLayout';
import UIState from '../../common/components/UIState';
import PlaylistInfos from '../components/PlaylistInfos';
import TracksList from '../components/TracksList';

const PlaylistScreen = ({ route }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPlaylist(route.params.playlistId));
  }, []);

  // Accessing redux global state using useSelector
  const playlistState = useSelector((state) => state.playlists.fetchPlaylist);

  const handleOnPressTrack = useCallback((track) => {
    dispatch(playTrack(track));
  }, []);

  return (
    <MainLayout>
      <UIState dataState={playlistState}>
        {(data) => {
          return (
            <View style={styles.wrapper}>
              <PlaylistInfos playlist={data} />
              <TracksList
                onPress={handleOnPressTrack}
                tracks={data.tracks.items}
              />
            </View>
          );
        }}
      </UIState>
    </MainLayout>
  );
};

PlaylistScreen.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      playlistId: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});

export default PlaylistScreen;
