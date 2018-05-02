import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
// import Login from './components/login/simple/Login'
import EntryScreen from './components/login/entry'

export default class App extends React.Component {
  render() {
    return (
      <EntryScreen />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
