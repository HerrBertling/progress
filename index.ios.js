/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Tasks = require('./data/tasks.json');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBarIOS,
} = React;

var progress = React.createClass({

  render: function() {
    StatusBarIOS.setStyle(1);
    var randomTask = Math.floor(Tasks.length * Math.random());
    var task = Tasks[randomTask];
    return (
      <Image
        style={styles.container}
        source={require('image!mind')}
      >
        <View style={[
          styles.textWrapper,
          {
            backgroundColor: 'rgba(11,136,191,0.7)',
          }
        ]}>
          <Text
            style={[
              styles.category,
              styles.text,
            ]}
          >
            {task.type}
          </Text>
          <Text
            style={[
              styles.task,
              styles.text,
            ]}
          >
            {task.text}
          </Text>
        </View>
      </Image>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
    // setting these to null avoids too huge images
    width: null,
    height: null,
  },
  textWrapper: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  Sports: {
    backgroundColor: 'rgba(24,54,241,0.7)',
  },
  Relationships: {
    backgroundColor: 'rgba(221,38,75,0.7)',
  },
  Money: {
    backgroundColor: 'rgba(90,173,76,0.7)',
  },
  Mind: {
    backgroundColor: 'rgba(102,18,129,0.75)',
  },
  Job: {
    backgroundColor: 'rgba(11,136,191,0.7)',
  },
  Knowledge: {
    backgroundColor: 'rgba(240,200,46,0.8)',
  },
  Creativity: {
    backgroundColor: 'rgba(236,88,3,0.7)',
  },
  text: {
    backgroundColor: 'transparent',
    fontFamily: 'Avenir',
    margin: 10,
    textAlign: 'center',
  },
  category: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 24,
  },
  task: {
    color: '#FFFFFF',
    fontSize: 36,
  },
});

AppRegistry.registerComponent('progress', () => progress);
