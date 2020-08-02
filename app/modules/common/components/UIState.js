import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';

const UIState = ({
  dataState,
  errorText,
  loadingText,
  emptyText,
  children,
}) => {
  if (dataState.loading) {
    return (
      <View style={styles.loaderWrapper}>
        <Text style={styles.loaderWrapper}>{loadingText}</Text>
      </View>
    );
  }
  if (dataState.error) {
    return (
      <View style={styles.errorWrapper}>
        <Text style={styles.errorWrapper}>{errorText}</Text>
      </View>
    );
  }
  if (!dataState.data && !Array.isArray(dataState.data)) {
    return (
      <View style={styles.emptyWrapper}>
        <Text style={styles.emptyWrapper}>{emptyText}</Text>
      </View>
    );
  }
  return children(dataState.data);
};

UIState.propTypes = {
  dataState: PropTypes.shape({
    loading: PropTypes.bool,
    data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    error: PropTypes.string,
  }).isRequired,
  children: PropTypes.func.isRequired,
  loadingText: PropTypes.string,
  emptyText: PropTypes.string,
  errorText: PropTypes.string,
};

UIState.defaultProps = {
  loadingText: 'Data is loading...',
  emptyText: 'No data has been found.',
  errorText: 'An error occured.',
};

const styles = StyleSheet.create({
  loadingWrapper: {},
  loadingText: {
    color: '#fff',
  },
  errorWrapper: {},
  errorText: {
    color: '#fff',
  },
  emptyWrapper: {},
  emptyText: {
    color: '#fff',
  },
});

export default UIState;
