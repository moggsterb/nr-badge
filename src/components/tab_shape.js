'use strict';
var Badge = require('./badge');
var DashIcon = require('./dash_icon');
var React = require('react');
var ReactNative = require('react-native');
var {
  StyleSheet,
  View,
  Text,
	TouchableHighlight,
  Component
} = ReactNative;
 


import frame from './../styles/frame';
 
var TabShape = React.createClass({
	
	_handlePress(data) {
		this.props.onPress(data)
	},
	
  render() {
    return (
			<View style={frame.container}>
				<Badge />
	      <View style={frame.dash}>
					<View style={frame.dashRow}>
						<DashIcon label="Shape 1" onPress={this._handlePress}/>
						<DashIcon label="Shape 2" onPress={this._handlePress}/>
						<DashIcon label="Shape 3" onPress={this._handlePress}/>
						<DashIcon label="Shape 4" onPress={this._handlePress}/>
					</View>
					<View style={frame.dashRow}>
						<DashIcon label="Shape 5" onPress={this._handlePress}/>
						<DashIcon label="Shape 6" onPress={this._handlePress}/>
						<DashIcon label="Shape 7" onPress={this._handlePress}/>
						<DashIcon label="Shape 8" onPress={this._handlePress}/>
					</View>
	      </View>
			</View>
    );
  }
})
 
module.exports = TabShape;