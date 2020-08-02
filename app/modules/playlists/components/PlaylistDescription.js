import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';

const PlaylistDescription = ({ playlist }) => {
  const { description, followers, owner, name } = playlist;
  return (
    <View style={styles.wrapper}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.author}>{`Playlist by ${owner.display_name}`}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.followers}>{`${followers.total} followers`}</Text>
    </View>
  );
};

PlaylistDescription.propTypes = {
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
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '68%',
  },
  name: {
    fontSize: 18,
    color: '#fff',
  },
  author: {
    fontSize: 12,
    color: '#555',
  },
  description: {
    fontSize: 12,
    color: '#fff',
  },
  followers: {
    fontSize: 12,
    color: '#555',
  },
});

export default PlaylistDescription;
