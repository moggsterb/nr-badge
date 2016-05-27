'use strict';
 
var React = require('react');
var ReactNative = require('react-native');
var {
  StyleSheet,
  View,
  Text,
  Component
} = ReactNative;

import frame from './../styles/frame';

var styles = StyleSheet.create({
  container: {
    flex: 1,
		height: 400,
    justifyContent: 'center',
    alignItems: 'stretch',
		backgroundColor: '#600'
  }
});

var Badge = React.createClass({
	render() {
    return (
      <View style={frame.badge}>
				<Text>Badge to go Here</Text>
      </View>
    );
  }
})

module.exports = Badge;
