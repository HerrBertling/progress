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
        source={{uri: 'https://images.unsplash.com/photo-1440470177828-6381dc5074ba?ixlib=rb-0.3.5&q=80&fm=jpg&s=6faf705d60f9804d03079755fb323a9a'}}
      >
        <View style={styles.textWrapper}>
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
  },
  textWrapper: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  Sports: {
    backgroundColor: 'rgba(67,146,241,0.7)',
  },
  Relationships: {
    backgroundColor: 'rgba(152,38,73,0.7)',
  },
  Money: {
    backgroundColor: 'rgba(117,185,190,0.7)',
  },
  Mind: {
    backgroundColor: 'rgba(83,18,83,0.7)',
  },
  Job: {
    backgroundColor: 'rgba(36,123,160,0.7)',
  },
  Knowledge: {
    backgroundColor: 'rgba(240,200,8,0.7)',
  },
  Creativity: {
    backgroundColor: 'rgba(204,88,3,0.7)',
  },
  text: {
    backgroundColor: 'transparent',
    fontFamily: 'Avenir',
    margin: 10,
    textAlign: 'center',
  },
  category: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 18,
  },
  task: {
    color: '#FFFFFF',
    fontSize: 36,
  },
});

AppRegistry.registerComponent('progress', () => progress);
