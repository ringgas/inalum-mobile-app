import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const Heading = ({ text }) => (
  <View>
    <Text style={styles.text}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    color: '#004643',
    fontFamily: 'Oswald-VariableFont_wght',
  },
});

Heading.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Heading;
