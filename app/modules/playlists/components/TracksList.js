import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, ScrollView } from 'react-native';

import TrackListItem from './TrackListItem';

const TracksList = ({ onPress, tracks }) => {
  return (
    <ScrollView contentContainerStyle={styles.wrapper}>
      {tracks.map(({ track }) => (
        <TrackListItem key={track.id} onPress={onPress} track={track} />
      ))}
    </ScrollView>
  );
};

TracksList.propTypes = {
  tracks: PropTypes.arrayOf(
    PropTypes.shape({
      artists: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string })),
      name: PropTypes.string,
      preview_url: PropTypes.string,
    })
  ).isRequired,
  onPress: PropTypes.func,
};

TracksList.defaultProps = {
  onPress: () => {},
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    alignItems: 'flex-start',
  },
});

export default TracksList;
