import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Header } from 'react-native-elements'

class Header1 extends Component {
    render() {
        return (
            <Header
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
            />
        )
    }
}

export default Header1;
