import React, { Component } from 'react';
import { Platform, View, Text, StyleSheet, /*Slider*/ } from 'react-native';
import Slider from 'react-native-slider'
//var Slider = require('react-native-slider');

class MetroDashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
          value: 20,
        };
    }

    change(value) {
        this.setState(() => {
          return {
            value: parseFloat(value),
          };
        });
    }

    render() {
        return (
            <View style={styles.container}>
            <Slider
                        value={10}
                        onValueChange={(value) => {}} />
                <View style={styles.card}>
                    <View style={styles.cardItem}>
                    <Slider
                        value={10}
                        onValueChange={(value) => {}} />
                    </View>
                    <View style={styles.cardItem}>
                    <Slider
                        value={10}
                        onValueChange={(value) => {}} />
                    </View>
                </View>
            </View>
        );
    }
}

const lightDark = '#2D3338'
const mainDark = '#1C2426'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: mainDark,
        paddingTop: 80 + (( Platform.OS === 'ios' ) ? 40 : 0),
    },
    card: {
        backgroundColor: lightDark,
        width: '100%',
        //flex: 1,
        flexDirection: 'row'
        
    },
    cardItem: {
        //padding: 40
    }
});


export default MetroDashboard;
