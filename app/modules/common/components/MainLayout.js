import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';

const MainLayout = ({ children }) => {
  return <View style={styles.mainLayout}>{children}</View>;
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = StyleSheet.create({
  mainLayout: {
    flex: 1,
    width: '100%',
    overflow: 'hidden',
    backgroundColor: '#000',
  },
});

export default MainLayout;
