'use strict';
 
var React = require('react');
var ReactNative = require('react-native');
var {
  StyleSheet,
  View,
  Text,
  Component
} = ReactNative;
 
var styles = StyleSheet.create({
  description: {
    fontSize: 20,
    textAlign: 'center',
    color: '#FFFFFF',
		backgroundColor: 'purple'
  },
  container: {
		flex: 1,
		flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
		paddingBottom: 100
  }
});
 
var TabColour = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.description}>
          Colours to Appear Here
        </Text>
      </View>
    );
  }
})
 
module.exports = TabColour;