import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import MainLayout from '../../common/components/MainLayout';
import UIState from '../../common/components/UIState';
import CardsList from '../../common/components/CardsList';
import {
  removePlaylistsWithoutImages,
  formatPlaylistsForCard,
} from '../helpers';
import { fetchPlaylists } from '..';

const BrowsePlaylistsScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPlaylists());
  }, []);

  // Accessing redux global state using useSelector
  const playlistsState = useSelector((state) => state.playlists.fetchPlaylists);

  const handleOnPress = useCallback((playlist) => {
    navigation.navigate('Playlist', { playlistId: playlist.id });
  }, []);

  return (
    <MainLayout>
      <UIState dataState={playlistsState}>
        {(data) => {
          const playlistsWithImages = removePlaylistsWithoutImages(data);
          const cardItems = formatPlaylistsForCard(playlistsWithImages);
          return <CardsList onPress={handleOnPress} items={cardItems} />;
        }}
      </UIState>
    </MainLayout>
  );
};

BrowsePlaylistsScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default BrowsePlaylistsScreen;
