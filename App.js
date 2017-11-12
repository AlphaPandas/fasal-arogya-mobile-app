/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {Image, TextInput, Button, Alert} from 'react-native';

import {StackNavigator} from 'react-navigation';

import LoginPage from './components/LoginPage';
import ImageUploadPage from './components/ImageUploadPage';
import DetailsPage from './components/DetailsPage';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  render() {
          const RootNavigator = StackNavigator({
              'Login': {
                  screen: LoginPage,
                  navigationOptions: {
                      headerTitle: 'Login'
                  }
              },
              'ImageUpload': {
                  screen: ImageUploadPage,
                  navigationOptions: {
                      headerTitle: 'Image Upload'
                  }
              },
              'Details': {
                  screen: DetailsPage,
                  navigationOptions: {
                      headerTitle: 'Details'
                  }
              }
          });
          return (
              <RootNavigator/>
          );
      }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
