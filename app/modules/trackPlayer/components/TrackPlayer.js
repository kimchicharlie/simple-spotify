/* eslint-disable global-require */
import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, Image, Text, TouchableOpacity, View } from 'react-native';

import {
  pauseCurrentTrack,
  playCurrentTrack,
  stopCurrentTrack,
  STATUS_STOPPED,
  STATUS_PLAYING,
  STATUS_PAUSED,
} from '..';

const TrackPlayer = () => {
  const dispatch = useDispatch();
  // Accessing redux global state using useSelector
  const { status, artist, title } = useSelector((state) => state.trackPlayer);

  const handleOnPressPause = useCallback(() => {
    dispatch(pauseCurrentTrack());
  }, []);

  const handleOnPressPlay = useCallback(() => {
    dispatch(playCurrentTrack());
  }, []);

  const handleOnPressStop = useCallback(() => {
    dispatch(stopCurrentTrack());
  }, []);

  const isVisible = status !== STATUS_STOPPED;

  return (
    isVisible && (
      <View style={styles.wrapper}>
        <Text style={styles.artist} numberOfLines={2}>
          {artist}
        </Text>
        {status === STATUS_PAUSED && (
          <TouchableOpacity onPress={handleOnPressPlay}>
            <Image style={styles.icon} source={require('../images/play.png')} />
          </TouchableOpacity>
        )}
        {status === STATUS_PLAYING && (
          <TouchableOpacity onPress={handleOnPressPause}>
            <Image
              style={styles.icon}
              source={require('../images/pause.png')}
            />
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={handleOnPressStop}>
          <Image style={styles.icon} source={require('../images/stop.png')} />
        </TouchableOpacity>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
      </View>
    )
  );
};

TrackPlayer.propTypes = {};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: 48,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  icon: {
    height: 32,
    width: 32,
  },
  artist: {
    fontSize: 12,
    width: '30%',
    textAlign: 'center',
  },
  title: {
    fontSize: 12,
    width: '30%',
    textAlign: 'center',
  },
});

export default TrackPlayer;
