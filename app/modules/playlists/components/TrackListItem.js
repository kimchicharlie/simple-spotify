/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

import { concatArtistsNames } from '../helpers';

const TrackListItem = ({ onPress, track }) => {
  const isPlayable = !!track.preview_url;
  const handlePressTrack = () => {
    onPress({
      artist: concatArtistsNames(track.artists),
      title: track.name,
      url: track.preview_url,
    });
  };
  return (
    <TouchableHighlight
      {...(isPlayable && {
        onPress: handlePressTrack,
      })}
      style={styles.touchable}
    >
      <View
        style={styles.wrapper}
        {...(isPlayable && {
          onPress: handlePressTrack,
        })}
      >
        <Text style={isPlayable ? styles.trackTitle : styles.unplayable}>
          {track.name}
        </Text>
        <Text style={isPlayable ? styles.trackArtists : styles.unplayable}>
          {concatArtistsNames(track.artists)}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

TrackListItem.propTypes = {
  track: PropTypes.shape({
    artists: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string })),
    name: PropTypes.string,
    preview_url: PropTypes.string,
  }).isRequired,
  onPress: PropTypes.func,
};

TrackListItem.defaultProps = {
  onPress: () => {},
};

const styles = StyleSheet.create({
  touchable: {
    width: '100%',
  },
  wrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    width: '100%',
    padding: 16,
  },
  trackTitle: {
    color: '#fff',
  },
  trackArtists: {
    color: '#555',
  },
  unplayable: {
    color: '#1A1A1A',
  },
});

export default TrackListItem;
