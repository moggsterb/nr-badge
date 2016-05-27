'use strict';

var Badge = require('./badge'); 
var DashIcon = require('./dash_icon');
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

});
 
var TabStroke = React.createClass({

	_handlePress(data) {
		this.props.onPress(data)
	},
	
  render() {
    return (
			<View style={frame.container}>
				<Badge />
	      <View style={frame.dash}>
					<View style={frame.dashRow}>
						<DashIcon label="Stroke 1" onPress={this._handlePress}/>
						<DashIcon label="Stroke 2" onPress={this._handlePress}/>
						<DashIcon label="Stroke 3" onPress={this._handlePress}/>
						<DashIcon label="Stroke 4" onPress={this._handlePress}/>
					</View>
					<View style={frame.dashRow}>
						<DashIcon label="Stroke 5" onPress={this._handlePress}/>
						<DashIcon label="Stroke 6" onPress={this._handlePress}/>
						<DashIcon label="Stroke 7" onPress={this._handlePress}/>
						<DashIcon label="Stroke 8" onPress={this._handlePress}/>
					</View>
	      </View>
			</View>
    );
  }
})
 
module.exports = TabStroke;