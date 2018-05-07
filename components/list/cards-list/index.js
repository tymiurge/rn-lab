import React, { Component } from 'react';
import { Platform, View, Text, StyleSheet, Slider } from 'react-native';

class CardsList extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>CardsList</Text>
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
        paddingTop: 80 + (( Platform.OS === 'ios' ) ? 40 : 0),
    },
});


export default CardsList;
