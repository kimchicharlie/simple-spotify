import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Image, TouchableHighlight } from 'react-native';

const Card = ({ item, onPress }) => {
  const handlePressCard = useCallback(() => onPress(item), [item]);
  return (
    <TouchableHighlight onPress={handlePressCard}>
      <Image style={styles.image} source={{ uri: item.imageUrl }} />
    </TouchableHighlight>
  );
};

Card.propTypes = {
  item: PropTypes.shape({
    imageUrl: PropTypes.string,
  }).isRequired,
  onPress: PropTypes.func,
};

Card.defaultProps = {
  onPress: () => {},
};

const styles = StyleSheet.create({
  image: {
    width: 128,
    height: 128,
    margin: 8,
    resizeMode: 'cover',
  },
});

export default Card;
