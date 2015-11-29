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

var imgBody = require('image!body');
var imgCreativity = require('image!creativity');
var imgJob = require('image!job');
var imgKnowledge = require('image!knowledge');
var imgMind = require('image!mind');
var imgMoney = require('image!money');
var imgRelationships = require('image!relationships');

var topicImages = {
  body: imgBody,
  creativity: imgCreativity,
  job: imgJob,
  knowledge: imgKnowledge,
  mind: imgMind,
  money: imgMoney,
  relationships: imgRelationships,
};

var topicBackground = {
  body: 'rgba(1,32,178,0.7)',
  creativity: 'rgba(236,88,3,0.7)',
  job: 'rgba(11,136,191,0.7)',
  knowledge: 'rgba(240,200,46,0.8)',
  mind: 'rgba(102,18,129,0.75)',
  money: 'rgba(90,173,76,0.7)',
  relationships: 'rgba(221,38,75,0.7)',
};

var progress = React.createClass({

  render: function() {

    StatusBarIOS.setStyle(1);

    var randomTask = Math.floor(Tasks.length * Math.random());
    var task = Tasks[randomTask];
    var taskStyle = task.type.toLowerCase();
    var taskImage = topicImages[taskStyle];
    var taskBackground = topicBackground[taskStyle];

    return (
      <Image
        style={styles.container}
        source={taskImage}
      >
        <View style={[
          styles.textWrapper,
          {
            backgroundColor: taskBackground,
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
