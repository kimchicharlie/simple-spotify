import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Image, View } from 'react-native';

const PlaylistImage = ({ url }) => {
  return (
    <View style={styles.wrapper}>
      <Image style={styles.image} source={{ uri: url }} />
    </View>
  );
};

PlaylistImage.propTypes = {
  url: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '32%',
  },
  image: {
    width: 88,
    height: 88,
    resizeMode: 'cover',
  },
});

export default PlaylistImage;
