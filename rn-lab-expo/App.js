import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SvgExample from './src/components/Picture'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SvgExample />  
      </View>
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
