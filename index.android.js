var React = require('react-native');
var Welcome = require('./welcome.ios');
var More = require('./more.ios');

var {
  AppRegistry,
  TabBarIOS,
  Component
} = React;

class mick extends Component {
	
	constructor(props) {
	    super(props);
	    this.state = {
	      selectedTab: 'shape'
	    };
	  }
	
	render() {
	    return (
	      <TabBarIOS selectedTab={this.state.selectedTab}>
	        <TabBarIOS.Item
	          selected={this.state.selectedTab === 'shape'}
	          icon={{uri:'featured'}}
	          onPress={() => {
	              this.setState({
	                  selectedTab: 'shape',
	              });
	          }}>
	            <Welcome/>
	        </TabBarIOS.Item>
	        <TabBarIOS.Item
	          selected={this.state.selectedTab === 'more'}
	          icon={{uri:'contacts'}}
	          onPress={() => {
	                this.setState({
	                    selectedTab: 'more',
	                });
	          }}>
	          <More/>
	        </TabBarIOS.Item>
	      </TabBarIOS>
	    );
	  }
}

AppRegistry.registerComponent('mick', () => mick);
