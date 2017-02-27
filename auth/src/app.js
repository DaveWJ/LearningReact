/**
 * Created by david on 2/24/17.
 */
import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import { Header, Button, CardSection, Spinner } from './components/common';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDXLTjwybe5xteTn6rYzPYC0cFXsCL02WY',
      authDomain: 'auth-1f5fa.firebaseapp.com',
      databaseURL: 'https://auth-1f5fa.firebaseio.com',
      storageBucket: 'auth-1f5fa.appspot.com',
      messagingSenderId: '592067719799'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  onLogOut() {
    this.setState({ loggedIn: null });
    firebase.auth().signOut();
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={this.onLogOut.bind(this)}>Log Out</Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <View style={{ paddingTop: 50 }}>
            <Spinner size="large"/>
          </View>
        );
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication"/>
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
