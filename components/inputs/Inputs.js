import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

/**
 * to enable Icon form the react-native-vector-icons/FontAwesome:
 * Run: 
 *      $ npm install react-native-vector-icons --save
 *      $ npm install
 *      $ npm install --save @expo/vector-icons
 */
class InputsScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Icon
                    name='user'
                    size={24}
                    color='black'
                />
                <Input
                    placeholder='INPUT WITH ICON'
                    leftIcon={{ type: 'font-awesome', name: 'user' }}
                />

                <Input
  placeholder='INPUT WITH CUSTOM ICON'
  rightIcon={
    <Icon
      name='user'
      size={24}
      color='black'
    />
  }
/>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
        //marginStart: 20,
    },
});


export default InputsScreen;
