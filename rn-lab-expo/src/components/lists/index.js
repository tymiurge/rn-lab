import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class List extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.listWrapper}>
                    <View style={styles.listItem}>
                        <Text>A</Text>
                        <Text>B</Text>
                        <Text>C</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    listWrapper: {

    },
    listItem: {
        flexDirection: 'row'    
    }
});


export default List;
