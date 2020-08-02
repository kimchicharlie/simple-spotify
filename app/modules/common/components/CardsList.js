import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, ScrollView } from 'react-native';

import Card from './Card';

const CardsLists = ({ items, onPress }) => {
  return (
    <ScrollView contentContainerStyle={styles.wrapper}>
      {items.map((item) => (
        <Card key={item.key} item={item} onPress={onPress} />
      ))}
    </ScrollView>
  );
};

CardsLists.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onPress: PropTypes.func,
};

CardsLists.defaultProps = {
  onPress: () => {},
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default CardsLists;
