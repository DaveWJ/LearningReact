/**
 * Created by david on 2/24/17.
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDXLTjwybe5xteTn6rYzPYC0cFXsCL02WY',
      authDomain: 'auth-1f5fa.firebaseapp.com',
      databaseURL: 'https://auth-1f5fa.firebaseio.com',
      storageBucket: 'auth-1f5fa.appspot.com',
      messagingSenderId: '592067719799'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication"/>
        <LoginForm />
      </View>
    );
  }
}

export default App;
